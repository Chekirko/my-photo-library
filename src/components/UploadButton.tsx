"use client";

import {
  CldUploadButton,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { Upload } from "lucide-react";
import { useResources } from "@/hooks/use-resources";
import { CloudinaryResource } from "@/types/cloudinary";

const UploadButton = () => {
  const { addResources } = useResources();
  function handleOnSuccess(results: CloudinaryUploadWidgetResults) {
    addResources([results.info as CloudinaryResource]);
  }
  return (
    <CldUploadButton
      signatureEndpoint="api/sign-cloudinary-params"
      options={{ autoMinimize: true, tags: ["media"] }}
      onSuccess={handleOnSuccess}
    >
      <span className="flex gap-2 items-center bg-red-400 py-2 px-6 rounded-lg hover:bg-red-600">
        <Upload className="w-4 h-4" /> Upload
      </span>
    </CldUploadButton>
  );
};

export default UploadButton;
