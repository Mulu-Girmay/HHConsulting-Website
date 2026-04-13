import React, { useState } from "react";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

export function ImageWithFallback(
  props: React.ImgHTMLAttributes<HTMLImageElement>,
) {
  const [didError, setDidError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setDidError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const { src, alt, style, className, ...rest } = props;

  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle rounded-full ${className ?? ""}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={ERROR_IMG_SRC}
            alt="Error loading image"
            className="w-full h-full object-cover rounded-full"
            {...rest}
            data-original-url={src}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className ?? ""}`} style={style}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100/90 to-gray-200/90 backdrop-blur-sm">
          <div className="relative">
            {/* Outer ring */}
            <div className="h-12 w-12 rounded-full border-4 border-[#F59E0B]/20 border-t-[#F59E0B] animate-spin" />
            {/* Inner ring */}
            <div
              className="absolute inset-2 h-6 w-6 rounded-full border-2 border-[#F59E0B]/40 border-t-[#F59E0B] animate-spin"
              style={{
                animationDirection: "reverse",
                animationDuration: "0.8s",
              }}
            />
            {/* Center dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-2 w-2 bg-[#F59E0B] rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      )}
      <img
        src={src}
        alt={alt ?? ""}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        style={style}
        loading="lazy"
        onError={handleError}
        onLoad={handleLoad}
        {...rest}
      />
    </div>
  );
}
