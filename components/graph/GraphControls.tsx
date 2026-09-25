"use client";

import React from "react";
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  RefreshCw,
  Filter,
  Eye,
  EyeOff,
} from "lucide-react";
import { useAppStore } from "@/lib/store";

interface GraphControlsProps {
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  onFit?: () => void;
  onRelayout?: () => void;
  showLabels?: boolean;
  onToggleLabels?: () => void;
}

export function GraphControls({
  onZoomIn,
  onZoomOut,
  onFit,
  onRelayout,
  showLabels = true,
  onToggleLabels,
}: GraphControlsProps) {
  const { hopFilter, setHopFilter } = useAppStore();

  return (
    <div className="glass-panel flex flex-wrap items-center justify-between gap-3 px-3 py-2 text-xs select-none">
      {/* Zoom & View Controls */}
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={onZoomIn}
          className="size-8 inline-flex items-center justify-center rounded-xl bg-white/60 hover:bg-white text-[var(--foreground)] border border-white/60 shadow-xs transition-colors cursor-pointer"
          title="Zoom In"
        >
          <ZoomIn className="size-4 text-[var(--muted-foreground)] hover:text-[var(--primary)]" />
        </button>

        <button
          type="button"
          onClick={onZoomOut}
          className="size-8 inline-flex items-center justify-center rounded-xl bg-white/60 hover:bg-white text-[var(--foreground)] border border-white/60 shadow-xs transition-colors cursor-pointer"
          title="Zoom Out"
        >
          <ZoomOut className="size-4 text-[var(--muted-foreground)] hover:text-[var(--primary)]" />
        </button>

        <button
          type="button"
          onClick={onFit}
          className="size-8 inline-flex items-center justify-center rounded-xl bg-white/60 hover:bg-white text-[var(--foreground)] border border-white/60 shadow-xs transition-colors cursor-pointer"
          title="Fit Graph to View"
        >
          <Maximize2 className="size-4 text-[var(--muted-foreground)] hover:text-[var(--primary)]" />
        </button>

        <button
          type="button"
          onClick={onRelayout}
          className="h-8 inline-flex items-center gap-1.5 px-2.5 rounded-xl bg-white/60 hover:bg-white text-xs font-semibold text-[var(--foreground)] border border-white/60 shadow-xs transition-colors cursor-pointer"
          title="Re-layout Graph"
        >
          <RefreshCw className="size-3.5 text-[var(--primary)]" />
          <span className="hidden sm:inline">Relayout</span>
        </button>

        <button
          type="button"
          onClick={onToggleLabels}
          className="h-8 inline-flex items-center gap-1.5 px-2.5 rounded-xl bg-white/60 hover:bg-white text-xs font-semibold text-[var(--foreground)] border border-white/60 shadow-xs transition-colors ml-1 cursor-pointer"
          title="Toggle Graph Labels"
        >
          {showLabels ? (
            <Eye className="size-3.5 text-[var(--primary)]" />
          ) : (
            <EyeOff className="size-3.5 text-[var(--muted-foreground)]" />
          )}
          <span>{showLabels ? "Labels On" : "Labels Off"}</span>
        </button>
      </div>

      {/* Hop Depth Filter Slider */}
      <div className="flex items-center gap-2 pl-2 border-l border-white/40">
        <Filter className="size-3.5 text-[var(--muted-foreground)] shrink-0" />
        <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">
          Hop Depth:
        </span>
        <input
          type="range"
          min={1}
          max={10}
          value={hopFilter}
          onChange={(e) => setHopFilter(Number(e.target.value))}
          className="w-20 accent-[var(--primary)] cursor-pointer h-1.5 rounded-lg bg-black/10"
        />
        <span className="grid size-6 place-items-center rounded-full bg-[var(--primary)] text-white text-[11px] font-mono font-bold">
          {hopFilter}
        </span>
      </div>
    </div>
  );
}
