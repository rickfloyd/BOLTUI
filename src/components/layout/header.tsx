import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Globe } from 'lucide-react';

const socialLinks = ["Facebook", "X (Twitter)", "Instagram", "TikTok", "LinkedIn", "Threads", "Reddit", "Discord", "YouTube", "Telegram", "Pinterest", "Snapchat", "Twitch", "Truth Social", "Rumble", "Medium", "Substack"];
const newsLinks = ["Forbes", "Bloomberg", "CNBC", "The Economist", "Business Insider", "Fortune", "TechCrunch", "Reuters", "MarketWatch", "Wired", "CoinDesk", "The Wall Street Journal", "Financial Times"];
const corporateLinks = ["Uber", "Lyft", "DoorDash", "PayPal", "Amazon", "Google Drive", "Google Meet", "Zoom", "Slack", "Dropbox", "Notion", "Microsoft Teams", "Shopify", "Stripe", "Airtable"];

function GlobalNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-accent/10 text-muted-foreground hover:text-accent-foreground">
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>Global Hub</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Social Media</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {socialLinks.map(link => <DropdownMenuItem key={link}>{link}</DropdownMenuItem>)}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Magazines & News</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {newsLinks.map(link => <DropdownMenuItem key={link}>{link}</DropdownMenuItem>)}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Corporate & Utility</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {corporateLinks.map(link => <DropdownMenuItem key={link}>{link}</DropdownMenuItem>)}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Header({ pageTitle }: { pageTitle: string }) {
  const userAvatar = PlaceHolderImages.find(p => p.id === 'user-avatar');

  return (
    <header className="h-20 flex items-center justify-between px-6 bg-card/30 backdrop-blur-sm border-b border-border/20 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-headline font-bold text-foreground">{pageTitle}</h1>
      </div>
      <div className="flex items-center gap-4">
        <GlobalNav />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10 border-2 border-accent/50">
                {userAvatar && <AvatarImage src={userAvatar.imageUrl} alt="User Avatar" data-ai-hint={userAvatar.imageHint} />}
                <AvatarFallback>Q</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Cyber User</p>
                <p className="text-xs leading-none text-muted-foreground">
                  user@email.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
