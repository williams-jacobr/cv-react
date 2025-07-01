import {useMemo} from 'react';

export const useParseClassname = (...classNames: (string | undefined)[]) => useMemo(() => classNames.filter(className => !!className).join(' '), [classNames]);
