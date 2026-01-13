'use client';

import { useEffect, useRef } from "react";
import Link from "next/link";

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    const container = contentRef.current;

    // Handle images
    const paragraphs = container.querySelectorAll("p");
    paragraphs.forEach((p) => {
      const images = p.querySelectorAll("img");
      const onlyImages = Array.from(p.childNodes).every((node) => {
        return node.nodeType === Node.ELEMENT_NODE && (node as HTMLElement).tagName === "IMG";
      });

      if (onlyImages && images.length >= 2) {
        p.classList.add("flex", "flex-wrap", "gap-8", "justify-center");
        images.forEach((img) => {
          img.classList.add(
            "object-cover",
            "rounded-lg",
            "shadow-md",
            "transition",
            "hover:scale-105",
            "w-full",
            "sm:w-[48%]",
            "md:w-[30%]",
            "max-h-[250px]",
            "m-4",
          );
          img.removeAttribute("width");
          img.removeAttribute("height");
          img.style.height = "auto";
          img.style.maxHeight = "250px";
          img.style.objectFit = "cover";
        });
      }
    });

    // Handle links
    const links = container.querySelectorAll("a");
    links.forEach((link) => {
      link.classList.add(
        "text-blue-600",
        "hover:underline",
        "transition-all",
        "duration-200"
      );
      if (link.hostname !== window.location.hostname) {
        link.classList.add("after:content-['_↗']");
      }
    });

    // Fix lists
    const lists = container.querySelectorAll('ul, ol');
    lists.forEach(list => {
      list.classList.remove('list-disc,');
      list.classList.add('list-disc', 'pl-6', 'my-4');

      const listItems = list.querySelectorAll('li');
      listItems.forEach(li => {
        li.classList.remove('list-disc,');
        li.classList.add('list-item', 'my-2');

        const paragraphs = li.querySelectorAll('p');
        paragraphs.forEach(p => {
          p.classList.add('mb-0', 'inline');
        });
      });
    });
  }, [content]);

  return (
    <article
      ref={contentRef}
      className="prose prose-lg lg:prose-xl max-w-none prose-img:rounded-md prose-img:my-6 prose-a:text-blue-600 hover:prose-a:underline"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
