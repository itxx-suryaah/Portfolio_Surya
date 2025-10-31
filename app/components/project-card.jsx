import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  title;
  description;
  imageUrl;
  imageHint;
  tags[];
  link;
};

export function ProjectCard({ title, description, imageUrl, imageHint, tags, link }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 ease-in-out hover-xl hover:-translate-y-1 bg-card">
      <div className="relative aspect-video">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover rounded-t-lg"
          data-ai-hint={imageHint}
        />
      </div>
      
        <CardTitle className="font-headline text-2xl">{title}</CardTitle>
        <CardDescription className="pt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
        </div>
      </CardContent>
      
        <Button asChild variant="link" className="p-0 h-auto text-base text-primary hover-primary/90">
            <Link href={link} target="_blank" rel="noopener noreferrer">
                View Project
                <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
