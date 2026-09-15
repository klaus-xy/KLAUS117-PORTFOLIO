"use client";
import { PROJECT_CATEGORIES, ProjectCategory } from "@/data/all-projects";
import { cn } from "@/lib/utils";

export type CategoryOption = ProjectCategory | "All";

interface Props {
  selected: CategoryOption;
  onSelect: (category: CategoryOption) => void;
}

const CategoryFilter = ({ selected, onSelect }: Props) => {
  const options: CategoryOption[] = ["All", ...PROJECT_CATEGORIES];

  return (
    <div className="flex flex-wrap gap-2 font-departure-mono text-xs tracking-widest uppercase">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onSelect(option)}
          aria-pressed={selected === option}
          className={cn(
            "rounded-full border px-4 py-2 transition-colors",
            selected === option
              ? "border-terminal-green bg-terminal-green text-background"
              : "border-muted-foreground/30 text-muted-foreground hover:border-terminal-green hover:text-terminal-green",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
