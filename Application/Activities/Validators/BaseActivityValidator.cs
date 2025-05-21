using System;
using Application.Activities.DTOs;
using FluentValidation;

namespace Application.Activities.Validators;

public class BaseActivityValidator<T, TDto> : AbstractValidator<T> where TDto : BaseActivityDto
{
    public BaseActivityValidator(Func<T,TDto> selector)
    {                                   
        RuleFor(x => selector(x).Title)
            .NotEmpty().WithMessage("Title is required")
            .MaximumLength(100).WithMessage("Title Must not exceed 100 Characters");
        RuleFor(x => selector(x).Description)
            .NotEmpty().WithMessage("Description is required")
            .MaximumLength(500).WithMessage("Description must not exceed 500 Characters");
        RuleFor(x => selector(x).Category)
            .NotEmpty().WithMessage("Category is required");
        RuleFor(x => selector(x).Date)
            .GreaterThan(DateTime.UtcNow).WithMessage("Datetime must be in the future");
        RuleFor(x => selector(x).City)
            .NotEmpty().WithMessage("City is required");
        RuleFor(x => selector(x).Venue)
            .NotEmpty().WithMessage("Venue is required");
        RuleFor(x => selector(x).Latitude)
            .NotEmpty().WithMessage("Latitude is required")
            .InclusiveBetween(-90, 90).WithMessage("Your Latitude must be between -90 and 90 degrees");
        RuleFor(x => selector(x).Longitude)
            .NotEmpty().WithMessage("Longitude is required")
            .InclusiveBetween(-180, 180).WithMessage("Your Longitude must be between -180 and 180 degrees");
    }
     
}
