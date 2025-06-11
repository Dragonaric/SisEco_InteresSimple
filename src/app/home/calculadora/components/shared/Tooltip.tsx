'use client';

import * as React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface TooltipProps {
  content: React.ReactNode;
  children?: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  className?: string;
  iconClassName?: string;
}

export function InfoTooltip({
  content,
  children,
  side = 'top',
  align = 'center',
  className,
  iconClassName,
}: TooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {children || (
            <InfoCircledIcon
              className={cn('h-4 w-4 text-muted-foreground hover:text-foreground transition-colors', iconClassName)}
              aria-label="Más información"
            />
          )}
        </TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          className={cn('max-w-[300px] p-4', className)}
        >
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

interface HelpDialogProps {
  title: string;
  content: React.ReactNode;
  trigger?: React.ReactNode;
  className?: string;
}

export function HelpDialog({
  title,
  content,
  trigger,
  className,
}: HelpDialogProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button
            variant="ghost"
            size="icon"
            className={cn('h-8 w-8', className)}
            aria-label={`Abrir ayuda sobre ${title}`}
          >
            <InfoCircledIcon className="h-4 w-4" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">{content}</div>
      </DialogContent>
    </Dialog>
  );
} 
