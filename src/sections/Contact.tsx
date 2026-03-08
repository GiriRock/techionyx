import Reveal from '@/components/site/Reveal';
import SectionIntro from '@/components/site/SectionIntro';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CalendarDays, Mail, MapPin, MessageSquareText } from 'lucide-react';

const contactItems = [
  {
    icon: Mail,
    title: 'Email',
    detail: 'hello@techionyx.com',
    caption: 'For project discussions and partnership inquiries',
  },
  {
    icon: CalendarDays,
    title: 'Response window',
    detail: 'Within 1 business day',
    caption: 'Typically faster for active opportunities',
  },
  {
    icon: MapPin,
    title: 'Engagement footprint',
    detail: 'Remote-first, globally collaborative',
    caption: 'Structured delivery across time zones',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 grid-overlay opacity-10" aria-hidden="true" />
      <div className="shell relative">
        <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-8">
            <SectionIntro
              eyebrow="Contact"
              title="Ready to build with a partner who understands product, systems, and delivery discipline?"
              description="Tell us what you are building, modernizing, or integrating. We will respond with a clear next-step recommendation and the right engagement path for your stage."
              invert
            />

            <div className="grid gap-4">
              {contactItems.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <article className="panel-dark flex items-start gap-4 p-5 sm:p-6">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-sky-300">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-sm text-slate-100">{item.detail}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{item.caption}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120} direction="right">
            <div className="panel overflow-hidden p-6 sm:p-8">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                  <MessageSquareText className="size-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-950">Start the conversation</h3>
                  <p className="text-sm text-slate-500">Share the essentials and we will take it from there.</p>
                </div>
              </div>

              <form className="mt-6 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Jane Smith" className="h-12 rounded-2xl border-slate-200 bg-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your organization" className="h-12 rounded-2xl border-slate-200 bg-white" />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input id="email" type="email" placeholder="jane@company.com" className="h-12 rounded-2xl border-slate-200 bg-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Project timeline</Label>
                    <Input id="timeline" placeholder="e.g. 6-8 weeks" className="h-12 rounded-2xl border-slate-200 bg-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="scope">What are you looking to build or improve?</Label>
                  <Textarea
                    id="scope"
                    rows={6}
                    placeholder="Share your product, system, integration, or modernization goals."
                    className="rounded-[24px] border-slate-200 bg-white"
                  />
                </div>

                <div className="flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-sm leading-6 text-slate-500">
                    By reaching out, you are starting a no-pressure discovery conversation focused on fit, scope, and next steps.
                  </p>
                  <Button className="h-12 rounded-full bg-slate-950 px-6 text-white hover:-translate-y-0.5 hover:bg-slate-900">
                    Send project brief
                  </Button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
