export interface simpleBlogCard{
    title: string;
    smallDescription: string;
    currentSlug: string;
    featuredImage: any;
}

export interface simpleProjectCard{
    projectName: string;
    smallDescription: string;
    startData: string;
    endData: string;
    technologies:Array<string>;
    demoLink: string;
    featuredImage: any;
}

export interface fullBlog{
    CurrentSlug: string,
    title: string,
    content: any,
    featuredImage: any
}