'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React from 'react';
import { ThemeProviderProps } from 'next-themes/dist/types';

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
