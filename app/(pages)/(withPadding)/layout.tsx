const WithPaddingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="my-16 px-8 max-w-[1300px] mx-auto">
        {children}
      </div>
    );
  };
  
  export default WithPaddingLayout;