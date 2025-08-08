// src/app/admin-upload/page.tsx

'use client';

import type { PutBlobResult } from '@vercel/blob';
import { useState, useRef } from 'react';
import Image from 'next/image';

export default function AdminUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const file = inputFileRef.current?.files?.[0];
    if (!file) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `/api/upload?filename=${file.name}`,
        { method: 'POST', body: file }
      );

      if (!response.ok) {
        const errorText = await response.text();
        // Parse para extrair a mensagem do JSON de erro
        const errorJson = JSON.parse(errorText);
        throw new Error(`Falha no upload. O servidor respondeu com: ${errorJson.message}`);
      }

      const newBlob = (await response.json()) as PutBlobResult;
      setBlob(newBlob);
    } catch (error) {
      console.error("Erro no upload:", error);
      alert(error instanceof Error ? error.message : "Ocorreu um erro desconhecido.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-2xl">
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Ferramenta de Upload
          </h1>
          <p className="text-gray-500 mb-6">
            Envie vídeos ou imagens dos projetos para o Vercel Blob.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="file"
              ref={inputFileRef}
              type="file"
              required
              accept="image/*,video/*"
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent 
              text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Enviando...' : 'Fazer Upload'}
            </button>
          </form>

          {blob && (
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-green-600">
                ✅ Upload Concluído!
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Copie e guarde esta URL para usar no seu arquivo de dados.
              </p>
              <input
                type="text"
                readOnly
                value={blob.url}
                className="mt-2 w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                onFocus={(e) => e.target.select()}
              />
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700">Preview:</p>
                {blob.pathname.match(/\.(jpeg|jpg|gif|png|webp)$/) != null ? (
                   <Image 
                      src={blob.url} 
                      alt="Preview do Upload" 
                      width={300} 
                      height={200}
                      className="mt-2 rounded-md object-cover" 
                    />
                ) : (
                   <video src={blob.url} controls width="300" className="mt-2 rounded-md" />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}