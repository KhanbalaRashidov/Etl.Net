﻿// https://codeburst.io/schedule-cron-jobs-using-hostedservice-in-asp-net-core-e17c47ba06
using Paillave.Etl.Scheduler;
// Console.WriteLine("Starting...");
// using (var source = TickSource.Create(new { CronExpression = @"@every_second", BatchId = 15 }, i => i.CronExpression))
// using (var subscription = source.Subscribe(i => Console.WriteLine($"{DateTime.Now: ss fff}")))
// {
//     source.Start();
//     // Thread.Sleep(5000);
//     // source.UpdateSource(new { CronExpression = "* * * * *", BatchId = 16 });
//     Console.WriteLine("Press any key to stop...");
//     Console.ReadKey();
// }

// using (var source = TickSource.Create(new { CronExpression = @"@every_second", BatchId = 15 }, i => i.CronExpression))
// using (var subscription = source.Subscribe(i => Console.WriteLine(i.BatchId)))
// {
//     source.Start();
//     Thread.Sleep(5000);
//     source.UpdateSource(new { CronExpression = "* * * * *", BatchId = 16 });
//     Thread.Sleep(3 * 60 * 1000);
// }
var tickConnection = new MyTickSourceConnection();
using (var manager = TickSourceManager.Create(tickConnection))
{
    manager.Tick += (sender, s) => Console.WriteLine($"{s.Id}: {DateTime.Now:ss}");
    manager.Start();
    Console.WriteLine("Press any key to stop...");
    Console.ReadKey();
}
public class Element
{
    public int Id { get; set; }
    public string? CronExpression { get; set; }
}

public class MyTickSourceConnection : TickSourceConnection<Element, int>
{
    public override IEnumerable<Element> GetAll() => new[]{
        new Element{ CronExpression="@every_second", Id=1},
        new Element{ CronExpression="@every_second", Id=2},
        new Element{ CronExpression="@every_second", Id=3},
        new Element{ CronExpression="@every_second", Id=4},
        new Element{ CronExpression="@every_second", Id=5},
    };
    public override string? GetCronExpression(Element source) => source.CronExpression;
    public override int GetKey(Element source) => source.Id;
}