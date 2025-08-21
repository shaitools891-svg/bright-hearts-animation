export interface TeamMember {
  id: number;
  name: string;
  nameBn: string;
  role: string;
  roleBn: string;
  bio: string;
  bioBn: string;
  image: string;
  email: string;
  linkedin?: string;
  facebook?: string;
}

export interface ProgramUpdate {
  id: number;
  date: string;
  title: string;
  titleBn: string;
  content: string;
  contentBn: string;
  images: string[];
}

export interface Program {
  id: number;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  image: string;
  status: 'active' | 'completed' | 'paused';
  startDate: string;
  updates: ProgramUpdate[];
}

export interface Event {
  id: number;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  date: string;
  time: string;
  location: string;
  locationBn: string;
  image: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface GalleryItem {
  id: number;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  image: string;
  category: string;
  date: string;
}

export interface PostponedActivity {
  id: number;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  originalDate: string;
  reason: string;
  reasonBn: string;
  status: 'postponed' | 'cancelled';
  expectedDate?: string;
}