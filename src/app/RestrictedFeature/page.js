import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RestrictedFeature = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card className="w-96 p-6 bg-white shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-center text-xl font-bold text-red-600">
              Access Restricted
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-700">
              This feature is only available to logged-in users. Please create
              an account or log in to continue and access this Feature.
            </p>
            <Link href="/">
              <Button className="w-full">Go Back to Homepage</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default RestrictedFeature;
