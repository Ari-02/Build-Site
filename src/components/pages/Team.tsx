"use client";

import React from 'react';
import { TeamInvite } from './TeamInvite';
import { TeamMembers } from './TeamMembers';
import { TeamTasks } from './TeamTasks';

const Team = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-cyberpunk-accent">Team Management</h1>
        <TeamInvite />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TeamMembers />
        <TeamTasks />
      </div>
    </div>
  );
};

export default Team;

