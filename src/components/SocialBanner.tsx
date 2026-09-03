import {
  SpotifyIcon,
  YoutubeIcon,
  InstagramIcon,
} from "./SocialIcons";

interface SocialBannerProps {
  className?: string;
}

export function SocialBanner({ className }: SocialBannerProps) {
  return (
    <div className={`w-full bg-brand-blue py-4 ${className ?? ""}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-6">
          {/* Band */}
          <div className="flex items-center gap-4 md:gap-6">
            <span className="font-black uppercase tracking-widest text-sm text-neutral-900 hidden lg:block">
              O Grupo:
            </span>
            <a
              href="https://www.instagram.com/tapadorella/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neutral-950 transition-colors flex items-center gap-2"
            >
              <InstagramIcon className="w-6 h-6 md:w-5 md:h-5" />
              <span className="font-mono text-xs uppercase font-bold tracking-widest">
                @tapadorella
              </span>
            </a>
            <a
              href="https://www.youtube.com/@TapaDOrella"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neutral-950 transition-colors flex items-center gap-2"
            >
              <YoutubeIcon className="w-6 h-6 md:w-5 md:h-5" />
            </a>
            <a
              href="https://open.spotify.com/intl-es/artist/5gnwOgI9I8nq2FGA0XAooJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neutral-950 transition-colors flex items-center gap-2"
            >
              <SpotifyIcon className="w-6 h-6 md:w-5 md:h-5" />
            </a>
          </div>

          <div className="hidden lg:block w-px h-6 bg-white/30" />

          {/* Pappaquino */}
          <div className="flex items-center gap-2 md:gap-4">
            <span className="font-black uppercase tracking-widest text-sm text-neutral-900 hidden lg:block">
              Pappaquino:
            </span>
            <a
              href="https://www.instagram.com/pappaquino/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neutral-950 transition-colors flex items-center gap-2"
            >
              <InstagramIcon className="w-5 h-5 md:w-4 md:h-4" />
              <span className="font-mono text-xs uppercase font-bold tracking-widest">
                @pappaquino
              </span>
            </a>
          </div>

          <div className="hidden md:block w-px h-6 bg-white/30" />

          {/* Willow GHZ */}
          <div className="flex items-center gap-2 md:gap-4">
            <span className="font-black uppercase tracking-widest text-sm text-neutral-900 hidden lg:block">
              Willow GHZ:
            </span>
            <a
              href="https://www.instagram.com/willow_ghz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neutral-950 transition-colors flex items-center gap-2"
            >
              <InstagramIcon className="w-5 h-5 md:w-4 md:h-4" />
              <span className="font-mono text-xs uppercase font-bold tracking-widest">
                @willow_ghz
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
