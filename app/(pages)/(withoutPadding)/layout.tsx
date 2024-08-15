const WithoutPaddingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="mx-auto">
        {children}
      </div>
    );
  };
  
  export default WithoutPaddingLayout;