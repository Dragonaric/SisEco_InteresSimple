// calculadora/components/calculator/InputField.tsx
import { forwardRef } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InputFieldProps {
  name: string;
  label: string;
  value: string;
  unit?: string;
  error?: string;
  description?: string;
  placeholder?: string;
  type?: 'text' | 'number';
  onChange: (value: string) => void;
  onBlur?: () => void;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ 
    name, 
    label, 
    unit, 
    value, 
    error, 
    description,
    placeholder,
    type = 'text',
    onChange,
    onBlur,
    className,
    disabled = false,
    required = false,
    min,
    max,
    step
  }, ref) => (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        <Label htmlFor={name} className="flex items-center gap-2">
          {label}
          {required && <span className="text-destructive">*</span>}
        </Label>
        {description && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs text-sm">{description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      
      <div className="relative">
        <Input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          onBlur={onBlur}
          ref={ref}
          placeholder={placeholder}
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          className={cn(
            "pr-8",
            error && "border-destructive focus-visible:ring-destructive",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        />
        {unit && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
            {unit}
          </span>
        )}
      </div>
      
      {error && (
        <p className="text-sm text-destructive animate-fade-in">
          {error}
        </p>
      )}
    </div>
  )
);

InputField.displayName = 'InputField';
