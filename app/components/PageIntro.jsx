import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import clsx from 'clsx';

export function PageIntro({ eyebrow, title, children, centered = false }) {
   return (
      <Container
         className={clsx(
            'mt-24 py-24 sm:mt-32 lg:mt-40',
            centered && 'text-center'
         )}
      >
         <FadeIn>
            <h1>
               <span className="font-display block text-base font-semibold text-neutral-950">
                  {eyebrow}
               </span>
               <span className="sr-only"> - </span>
               <span
                  className={clsx(
                     'font-display mt-6 block max-w-5xl text-balance text-5xl font-medium tracking-tight text-neutral-950 sm:text-6xl',
                     centered && 'mx-auto'
                  )}
               >
                  {title}
               </span>
            </h1>
            <div
               className={clsx(
                  'mt-6 max-w-3xl text-balance text-xl text-neutral-600',
                  centered && 'mx-auto'
               )}
            >
               {children}
            </div>
         </FadeIn>
      </Container>
   );
}
