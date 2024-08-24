import { Button } from "@/components/ui/button";
import { JobLogo } from "../jobLogo";
import { BriefcaseBusiness } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Landmark } from 'lucide-react';

export default async function CareerPage(){
    return(
        <div className="max-w-7xl mx-auto py-12 lg:py-16 w-full px-8">
            <div>
                <JobLogo/>
            </div>
            <div className="md:flex justify-between mt-2 pt-2">
                <div className="flex flex-col gap-1">
                    <p className="text-2xl">Senior Full Stack Engineer</p>
                    <p className="text-sm text-[#f7671e] uppercase font-semibold1">Skyrek {"(pvt)"} ltd</p>
                    <div className="flex gap-4">
                        <div className="flex gap-2 items-center">
                            <BriefcaseBusiness className="h-4 w-4 text-gray-600"/>
                            <p className="text-sm text-gray-600">Contract</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <MapPin className="h-4 w-4 text-gray-600"/>
                            <p className="text-sm text-gray-600">Contract</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Landmark className="h-4 w-4 text-gray-600"/>
                            <p className="text-sm text-gray-600">Contract</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 md:mt-0">
                    <Button variant={"outline"}>Apply for this job</Button>
                </div>
            </div>

            <div className="mt-8">
                <p className="text-gray-900">Role Description:</p>
                <p className="mt-2 font-light">
                Surge Global is a digital consultancy that leverages marketing, data, and technology to help businesses grow. As Sri Lanka’s leading digital firm, we employ the best content, creative, design & engineering talent the country has to offer.
                </p>
            </div>

            <div className="mt-5">
                <p className="text-gray-900">Responsibilities:</p>
                <p className="mt-2 font-light">
                Surge Global is a digital consultancy that leverages marketing, data, and technology to help businesses grow. As Sri Lanka’s leading digital firm, we employ the best content, creative, design & engineering talent the country has to offer.
                <br /><br />
                Surge Global is a digital consultancy that leverages marketing, data, and technology to help businesses grow. As Sri Lanka’s leading digital firm, we employ the best content, creative, design & engineering talent the country has to offer.
                <br /><br />
                Surge Global is a digital consultancy that leverages marketing, data, and technology to help businesses grow. As Sri Lanka’s leading digital firm, we employ the best content, creative, design & engineering talent the country has to offer.
                <br /><br />
                Surge Global is a digital consultancy that leverages marketing, data, and technology to help businesses grow. As Sri Lanka’s leading digital firm, we employ the best content, creative, design & engineering talent the country has to offer.
                <br /><br />
                Surge Global is a digital consultancy that leverages marketing, data, and technology to help businesses grow. As Sri Lanka’s leading digital firm, we employ the best content, creative, design & engineering talent the country has to offer.
                </p>
            </div>

            <div className="mt-5">
                <p className="text-gray-900">Requirements:</p>
                <p className="mt-2 font-light">
                Surge Global is a digital consultancy that leverages marketing, data, and technology to help businesses grow. As Sri Lanka’s leading digital firm, we employ the best content, creative, design & engineering talent the country has to offer.
                <br /><br />
                Surge Global is a digital consultancy that leverages marketing, data, and technology to help businesses grow. As Sri Lanka’s leading digital firm, we employ the best content, creative, design & engineering talent the country has to offer.
                <br /><br />
                Surge Global is a digital consultancy that leverages marketing, data, and technology to help businesses grow. As Sri Lanka’s leading digital firm, we employ the best content, creative, design & engineering talent the country has to offer.
                <br /><br />
                Surge Global is a digital consultancy that leverages marketing, data, and technology to help businesses grow. As Sri Lanka’s leading digital firm, we employ the best content, creative, design & engineering talent the country has to offer.
                <br /><br />
                Surge Global is a digital consultancy that leverages marketing, data, and technology to help businesses grow. As Sri Lanka’s leading digital firm, we employ the best content, creative, design & engineering talent the country has to offer.
                </p>
            </div>
        </div>
    )
}