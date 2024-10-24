import Button from "@/app/components/Button"; // Importing Button client component

const Mission = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
      <p className="text-gray-700 mb-6">
        We are committed to delivering the best services to our clients and achieving 
        sustainable growth.
      </p>
      {/* Including the client-side Button component */}
      <Button />
    </div>
  );
}

export default Mission;


//* We are using a client-side component (Button) within this page, while keeping the rest of the page rendered as a server-side component. 
//* This approach allows us to maintain server-side rendering for most of the content, while adding interactivity where needed.
