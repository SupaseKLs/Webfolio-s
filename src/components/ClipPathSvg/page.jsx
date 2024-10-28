// components/ClipPathSvg.js
export default function ClipPathSvg() {
    return (
      <svg width="0" height="0">
        <defs>
          <clipPath id="customClipPath" clipPathUnits="objectBoundingBox">
            <path d="M1,0 H0 V1 H0.7 V0.9 H1 Z" />
          </clipPath>
        </defs>
      </svg>
    );
  }
  