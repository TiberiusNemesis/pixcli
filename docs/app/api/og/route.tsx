import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') ?? 'pixcli';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          background: '#000000',
          padding: '72px 80px',
          fontFamily: 'monospace',
        }}
      >
        {/* Logo mark — pixcli icon (simplified P shape) */}
        <div
          style={{
            position: 'absolute',
            top: '64px',
            left: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              background: '#ffffff',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                background: '#000',
                borderRadius: '50%',
                border: '5px solid #fff',
              }}
            />
          </div>
          <span
            style={{
              color: '#ffffff',
              fontSize: '22px',
              fontWeight: 700,
              letterSpacing: '0.05em',
            }}
          >
            pixcli
          </span>
        </div>

        {/* Page title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '900px',
          }}
        >
          <span
            style={{
              color: '#71717a',
              fontSize: '18px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            docs
          </span>
          <h1
            style={{
              color: '#ffffff',
              fontSize: title.length > 30 ? '52px' : '64px',
              fontWeight: 700,
              lineHeight: 1.1,
              margin: 0,
              padding: 0,
            }}
          >
            {title}
          </h1>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            height: '4px',
            background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 50%, #000 100%)',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
