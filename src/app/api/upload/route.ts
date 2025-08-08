// src/app/api/upload/route.ts

import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  if (!filename || !request.body) {
    return NextResponse.json(
      { message: 'Nome do arquivo não encontrado.' },
      { status: 400 }
    );
  }

  try {
    const blob = await put(filename, request.body, {
      access: 'public',
      addRandomSuffix: true,
    });

    return NextResponse.json(blob);

  } catch (error: unknown) {
    console.error("Erro detalhado no upload do Vercel Blob:", error);

    let errorMessage = 'Ocorreu um erro desconhecido no servidor.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    if (typeof errorMessage === 'string' && (errorMessage.includes('forbidden') || errorMessage.includes('403'))) {
        return NextResponse.json(
            { message: `Erro de permissão (403 Forbidden): Verifique se a variável de ambiente BLOB_READ_WRITE_TOKEN está configurada corretamente no seu projeto Vercel e se você fez o redeploy.` },
            { status: 500 }
        );
    }

    return NextResponse.json(
      { message: `Erro no servidor durante o upload: ${errorMessage}` },
      { status: 500 }
    );
  }
}