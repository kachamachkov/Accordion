import Accordion from "./Accordion";

const FAQ = () => {
    return (
        <div className="mx-20  p-4 bg-gray-200 rounded-lg">
            <Accordion title='Do you prefer Android or IOS?' answer='I like to use IOS' />
            <Accordion title='Do you prefer writing CSS or Tailwind?' answer='I like to use Tailwind' />
            <Accordion title='Firebase or Supabase?' answer='I prefer Firebase' />
        </div>
    );
};
export default FAQ;