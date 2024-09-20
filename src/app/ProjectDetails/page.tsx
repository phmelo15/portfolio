"use client";

import ProjectDetailsContent from "@/components/ProjectDetailsContent/ProjectDetailsContent";
import React, { Suspense } from "react";

export default function ProjectDetails() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ProjectDetailsContent />
    </Suspense>
  );
}
