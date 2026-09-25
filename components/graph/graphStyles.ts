import cytoscape from "cytoscape";

export function getCytoscapeStyles(showLabels: boolean = true): cytoscape.StylesheetCSS[] {
  return [
    {
      selector: "node",
      css: {
        "background-color": "#2E6C3B",
        label: showLabels ? "data(label)" : "",
        color: "#1E293B",
        "font-size": "11px",
        "font-family": "Manrope, monospace",
        "font-weight": "bold",
        "text-valign": "bottom",
        "text-margin-y": 6,
        width: 34,
        height: 34,
        "border-width": 3,
        "border-color": "#FFFFFF",
      },
    },
    {
      selector: 'node[role = "burner"]',
      css: {
        "background-color": "#E11D48",
        "border-color": "#FFFFFF",
        "border-width": 3,
        width: 36,
        height: 36,
      },
    },
    {
      selector: 'node[role = "vasp"]',
      css: {
        "background-color": "#2563EB",
        "border-color": "#FFFFFF",
        "border-width": 3.5,
        width: 42,
        height: 42,
      },
    },
    {
      selector: "node:selected",
      css: {
        "border-width": 4,
        "border-color": "#15803D",
      },
    },
    {
      selector: "edge",
      css: {
        width: "data(width)" as unknown as number,
        "line-color": "#94A3B8",
        "target-arrow-color": "#64748B",
        "target-arrow-shape": "triangle",
        "arrow-scale": 1.2,
        "curve-style": "bezier",
        label: showLabels ? "data(label)" : "",
        "font-size": "9.5px",
        color: "#334155",
        "font-family": "JetBrains Mono, monospace",
        "font-weight": "bold",
        "text-background-color": "#FFFFFF",
        "text-background-opacity": 0.92,
        "text-background-padding": "3px",
        "text-border-color": "#E2E8F0",
        "text-border-width": 1,
        "text-border-opacity": 0.8,
      },
    },
    {
      selector: 'edge[suspicious = "true"]',
      css: {
        "line-color": "#F43F5E",
        "target-arrow-color": "#E11D48",
      },
    },
    {
      selector: "edge:selected",
      css: {
        "line-color": "#2E6C3B",
        "target-arrow-color": "#1E4726",
        width: 4,
      },
    },
  ];
}
