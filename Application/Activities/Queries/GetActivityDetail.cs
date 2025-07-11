using System;
using Application.Activities.DTOs;
using Application.Core;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityDetail
{
    public class Query : IRequest<Result<ActivityDto>>
    {
        public required string Id {get; set;}
    }

    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Query, Result<ActivityDto>>
    {
        public async Task<Result<ActivityDto>> Handle(Query request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities
            .Include(x => x.Attendees)
            .ThenInclude(x => x.User)
            .FirstOrDefaultAsync(x => request.Id == x.Id);

            if (activity == null) return Result<ActivityDto>.Failure("Activity Not Found", 404);

            return Result<ActivityDto>.Success(mapper.Map<ActivityDto>(activity));
        }
    }
}
