import { FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon, YoutubeIcon } from "@/components/icons"
import { IconButton } from "@/components/ui/icon-button"

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <a
        href="https://facebook.com/alhagginvestment"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Facebook"
      >
        <IconButton
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
        >
          <FacebookIcon className="h-5 w-5" />
        </IconButton>
      </a>
      <a
        href="https://twitter.com/alhagginvestment"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Twitter"
      >
        <IconButton
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-sky-50 hover:text-sky-500 hover:border-sky-200"
        >
          <TwitterIcon className="h-5 w-5" />
        </IconButton>
      </a>
      <a
        href="https://linkedin.com/company/alhagginvestment"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect with us on LinkedIn"
      >
        <IconButton
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200"
        >
          <LinkedInIcon className="h-5 w-5" />
        </IconButton>
      </a>
      <a
        href="https://instagram.com/alhagginvestment"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
      >
        <IconButton
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200"
        >
          <InstagramIcon className="h-5 w-5" />
        </IconButton>
      </a>
      <a
        href="https://youtube.com/alhagginvestment"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Subscribe to our YouTube channel"
      >
        <IconButton
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-red-50 hover:text-red-600 hover:border-red-200"
        >
          <YoutubeIcon className="h-5 w-5" />
        </IconButton>
      </a>
    </div>
  )
}

