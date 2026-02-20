import React from 'react';
import mockApi from '@/utils/mockApi';

function useUpload() {
  const [loading, setLoading] = React.useState(false);
  const upload = React.useCallback(async (input) => {
    try {
      setLoading(true);

      // Use mock API for file upload
      const mimeType = input.file?.type || input.mimeType || 'application/octet-stream';
      const result = await mockApi.uploadFile({ mimeType });

      return { url: result.url, mimeType: result.mimeType || null };
    } catch (uploadError) {
      if (uploadError instanceof Error) {
        return { error: uploadError.message };
      }
      if (typeof uploadError === 'string') {
        return { error: uploadError };
      }
      return { error: 'Upload failed' };
    } finally {
      setLoading(false);
    }
  }, []);

  return [upload, { loading }];
}

export default useUpload;
