"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Badge } from "../../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { useTeamTasks } from "../../lib/hooks/useTeamTasks";
import { formatDistanceToNow } from "date-fns";

export function TeamTasks() {
  const { tasks } = useTeamTasks();

  return (
    <Card className="bg-cyberpunk-800 border-cyberpunk-600">
      <CardHeader>
        <CardTitle className="text-cyberpunk-accent">Team Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="p-4 rounded-lg border border-cyberpunk-600 bg-cyberpunk-700 hover:bg-cyberpunk-600 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-cyberpunk-100">{task.title}</h4>
                    <p className="text-sm text-cyberpunk-300">
                      {task.description}
                    </p>
                  </div>
                  <Badge variant="outline" className={
                    task.priority === "high"
                      ? "text-red-500"
                      : task.priority === "medium"
                      ? "text-yellow-500"
                      : "text-green-500"
                  }>
                    {task.priority}
                  </Badge>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={task.assignee.photoURL} />
                      <AvatarFallback className="bg-cyberpunk-600 text-cyberpunk-100">
                        {task.assignee.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-cyberpunk-300">
                      {task.assignee.name}
                    </span>
                  </div>
                  <span className="text-sm text-cyberpunk-300">
                    Due {formatDistanceToNow(new Date(task.dueDate), { addSuffix: true })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

