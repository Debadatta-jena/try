export interface FamilyMember {
  id: string;
  name: string;
  birthDate: string;
  deathDate: string | null;
  bio: string;
  photo: string;
  generation: number;
  parentId: string | null;
  spouseId: string | null;
}

export interface Photo {
  id: string;
  title: string;
  description: string;
  src: string;
  date: string;
  category: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  src: string;
  thumbnail: string;
  date: string;
  duration: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
}
