using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any() )
            {
                var users = new List<AppUser>
                {
                    new AppUser
                    {
                        DisplayName = "Sadete",
                        UserName = "sadete",
                        Email = "sadete@gmail.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Jane",
                        UserName = "jane",
                        Email = "jane@test.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Tom",
                        UserName = "tom",
                        Email = "tom@test.com"
                    },
                };

                 foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }

            if(context.Activities.Any()) return;
            
            var activities = new List<Activity>
            {
                new Activity
                {
                    Title = "BMW",
                    Date = DateTime.Now.AddMonths(-12),
                    Description = "Black",
                    Category = "Coupe",
                    City = "Las Vegas",
                    Venue = "",
                    Available="Yes",
                    Price=150,
                },
                new Activity
                {
                    Title = "Mercedes-Benz",
                    Date = DateTime.Now.AddMonths(-24),
                    Description = "White",
                    Category = "Coupe",
                    City = "Paris",
                    Venue = "",
                    Available="Yes",
                    Price=100,
                },
                new Activity
                {
                    Title = "Audi",
                    Date = DateTime.Now.AddMonths(-36),
                    Description = "Black",
                    Category = "Coupe",
                    City = "London",
                    Venue = "",
                    Available="No",
                    Price=70,
                },
                new Activity
                {
                    Title = "Porsche",
                    Date = DateTime.Now.AddMonths(-12),
                    Description = "Black",
                    Category = "Coupe",
                    City = "London",
                    Venue = "",
                    Available="Yes",
                    Price=150,
                },
                new Activity
                {
                    Title = "Volkswagen Golf",
                    Date = DateTime.Now.AddMonths(-36),
                    Description = "Gray",
                    Category = "Coupe",
                    City = "Paris",
                    Venue = " ",
                    Available="No",
                    Price=50,
                },
                new Activity
                {
                    Title = "Nisan Versa",
                    Date = DateTime.Now.AddMonths(-48),
                    Description = "Red",
                    Category = "Sedan",
                    City = "Las Vegas",
                    Venue = "",
                    Available="No",
                    Price=70,
                },
                new Activity
                {
                    Title = "Toyota Avlon",
                    Date = DateTime.Now.AddMonths(-100),
                    Description = "Brown",
                    Category = "SEDAN",
                    City = "LAs Vegas",
                    Venue = "",
                    Available="Yes",
                    Price=80,
                },
                new Activity
                {
                    Title = "Kia Stinger",
                    Date = DateTime.Now.AddMonths(-200),
                    Description = "Blue",
                    Category = "HATCHBACK",
                    City = "Paris",
                    Venue = "",
                    Available="Yes",
                    Price=90,
                },
               
            };

            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
    }