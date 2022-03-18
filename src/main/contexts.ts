import React from "react";
import { CloudService } from "services/cloud/CloudService";

const cloudService = CloudService.get().initialize();
export const CloudContext = React.createContext<
  typeof cloudService | undefined
>(cloudService);
