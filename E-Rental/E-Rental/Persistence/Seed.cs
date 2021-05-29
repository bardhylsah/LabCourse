using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{     public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Activities.Any()) return;
            
            var activities = new List<Activity>
            {
                new Activity
                {
                   Name = "AUDI",
                    Date = DateTime.Now.AddMonths(-2),
                    Description = "A3 2020",
                    Category = "hatchback",
                    City = "London",
                    Venue = "Pub",
                },
                new Activity
                {
                    Name = "BMW",
                    Date = DateTime.Now.AddMonths(-1),
                    Description = "X5 2019",
                    Category = "SUV",
                    City = "Paris",
                    Venue = "Louvre",
                },
                new Activity
                {
                    Name = "Mercedes Benz",
                    Date = DateTime.Now.AddMonths(1),
                    Description = "C class 2017",
                    Category = "coupe",
                    City = "London",
                    Venue = "Natural History Museum",
                },
                new Activity
                {
                    Name = "Volkswagen",
                    Date = DateTime.Now.AddMonths(2),
                    Description = "Golf 7 2017",
                    Category = "hatchback",
                    City = "London",
                    Venue = "O2 Arena",
                },
                new Activity
                {
                    Name = "Skoda",
                    Date = DateTime.Now.AddMonths(3),
                    Description = "Rapid 2020",
                    Category = "Sedan",
                    City = "London",
                    Venue = "Big Ben",
                },
                new Activity
                {
                    Name = "Citroen",
                    Date = DateTime.Now.AddMonths(4),
                    Description = "C4 2016",
                    Category = "Hatchback",
                    City = "Dubai",
                    Venue = "Burj Khalifa",
                },
                new Activity
                {
                    Name = "Volkswagen",
                    Date = DateTime.Now.AddMonths(5),
                    Description = "Tiguan 2017",
                    Category = "SUV",
                    City = "Dubai",
                    Venue = "Burj Al - Arab",
                },
                new Activity
                {
                    Name = "Jaguar",
                    Date = DateTime.Now.AddMonths(6),
                    Description = "F Pace 2017",
                    Category = "SUV",
                    City = "Dubai",
                    Venue = "Roundhouse",
                },
                new Activity
                {
                    Name = "Audi",
                    Date = DateTime.Now.AddMonths(7),
                    Description = "A4 2021",
                    Category = "Sedan",
                    City = "London",
                    Venue = "On the Thames",
                },
                new Activity
                {
                    Name = "Volkswagen",
                    Date = DateTime.Now.AddMonths(8),
                    Description = "Arteon 2020",
                    Category = "Sedan",
                    City = "London",
                    Venue = "Cinema",
                }
            };

            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}