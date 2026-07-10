import Icon from './Icon';
import type { IconName } from './Icon';

/**
 * ImagePlaceholder — a labeled, dashed-border box that reserves space for an
 * image we still need to capture. The `caption` is intentionally visible on
 * the page so we (and anyone helping) can see exactly what asset belongs here
 * and how big it should be. Swap the placeholder for a real <Image> once the
 * asset lands in /public/images/portfolio.
 */
interface ImagePlaceholderProps {
  /** Short slot name, e.g. "Client Logo" or "Hero Image". */
  label: string;
  /** Guidance shown inside the box: what image to capture here. */
  caption?: string;
  /** Icon shown above the label. */
  icon?: IconName;
  /** Extra classes for sizing / aspect ratio. */
  className?: string;
  /** Tighter padding + smaller type for small slots (e.g. a logo). */
  compact?: boolean;
}

export default function ImagePlaceholder({
  label,
  caption,
  icon = 'image',
  className = '',
  compact = false,
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${label}${caption ? ` — ${caption}` : ''}`}
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-nebula-violet/40 bg-nebula-violet/[0.06] text-center dark:border-nebula-cyan/40 dark:bg-nebula-cyan/[0.06] ${
        compact ? 'p-4' : 'p-6'
      } ${className}`}
    >
      <Icon
        name={icon}
        size={compact ? 'medium' : 'large'}
        className="text-nebula-violet opacity-70 dark:text-nebula-cyan"
      />
      <p
        className={`font-semibold uppercase tracking-wide text-nebula-violet dark:text-nebula-cyan ${
          compact ? 'text-xs' : 'text-sm'
        }`}
      >
        {label}
      </p>
      {caption && (
        <p
          className={`max-w-md text-text-secondary ${
            compact ? 'text-xs' : 'text-sm'
          }`}
        >
          📸 {caption}
        </p>
      )}
    </div>
  );
}
