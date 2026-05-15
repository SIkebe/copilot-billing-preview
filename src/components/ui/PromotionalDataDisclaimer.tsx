import { appLinks } from '../../config/links'

type PromotionalDataDisclaimerProps = {
  scope?: 'individual' | 'organization'
  className?: string
}

export function PromotionalDataDisclaimer({
  scope = 'individual',
  className = '',
}: PromotionalDataDisclaimerProps) {
  const href = scope === 'organization'
    ? appLinks.promotionalAmountsDocs
    : appLinks.flexAllotmentDocs
  const message = scope === 'organization'
    ? 'Promotional amounts are included in this estimate.'
    : 'Flex allotment is included in this estimate.'
  const linkText = scope === 'organization'
    ? 'Learn more about promotional amounts.'
    : 'Learn more about flex allotment.'

  return (
    <p className={`m-0 mt-1 text-[12px] text-fg-muted leading-normal ${className}`.trim()}>
      {message}{` `}
      <a
        href={href}
        className="text-fg-accent no-underline hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkText}
      </a>
    </p>
  )
}
