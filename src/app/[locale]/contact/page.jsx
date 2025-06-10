import { ContacSection } from '@/components/sections/ContacSection';
import { getDictionary } from '@/libs/dictionaries';

export default async function Contac({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return <ContacSection contactData={dict.contactData} />;
}
