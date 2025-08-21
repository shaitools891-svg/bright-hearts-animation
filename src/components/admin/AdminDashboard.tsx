import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Calendar, 
  Image, 
  FileText, 
  Clock, 
  LogOut,
  Book,
  Camera
} from 'lucide-react';

interface AdminDashboardProps {
  onLogout: () => void;
}

export const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Team Members', value: '2', icon: Users, color: 'text-blue-600' },
    { label: 'Active Programs', value: '2', icon: Book, color: 'text-green-600' },
    { label: 'Upcoming Events', value: '1', icon: Calendar, color: 'text-orange-600' },
    { label: 'Gallery Items', value: '2', icon: Camera, color: 'text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="bg-card border-b border-border p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full hero-gradient flex items-center justify-center">
              <span className="text-white font-bold text-sm">BH</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">Bright Hearts Brighter Society</p>
            </div>
          </div>
          <Button onClick={onLogout} variant="outline" size="sm">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {stat.label}
                          </p>
                          <p className="text-2xl font-bold text-primary">{stat.value}</p>
                        </div>
                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Quick Instructions
                </CardTitle>
                <CardDescription>
                  How to manage content in your website
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/50">
                  <h4 className="font-semibold mb-2">Adding New Content</h4>
                  <ol className="text-sm space-y-1 text-muted-foreground">
                    <li>1. Edit the JSON files in the <code className="bg-muted px-1 rounded">public/data/</code> folder</li>
                    <li>2. Add images to <code className="bg-muted px-1 rounded">public/images/</code> folder</li>
                    <li>3. Commit and push changes to GitHub</li>
                    <li>4. Changes will appear on your website automatically</li>
                  </ol>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <h4 className="font-semibold mb-2">File Structure</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• <code className="bg-muted px-1 rounded">team.json</code> - Team member profiles</li>
                    <li>• <code className="bg-muted px-1 rounded">programs.json</code> - Programs and updates</li>
                    <li>• <code className="bg-muted px-1 rounded">events.json</code> - Upcoming events</li>
                    <li>• <code className="bg-muted px-1 rounded">gallery.json</code> - Photo gallery</li>
                    <li>• <code className="bg-muted px-1 rounded">postponed.json</code> - Postponed activities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team">
            <Card>
              <CardHeader>
                <CardTitle>Team Management</CardTitle>
                <CardDescription>
                  Edit <code className="bg-muted px-1 rounded">public/data/team.json</code> to manage team members
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Badge variant="outline">Current team members: 2</Badge>
                  <p className="text-sm text-muted-foreground">
                    To add a new team member, copy the JSON structure from existing members 
                    and add your new member to the array.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="programs">
            <Card>
              <CardHeader>
                <CardTitle>Programs Management</CardTitle>
                <CardDescription>
                  Edit <code className="bg-muted px-1 rounded">public/data/programs.json</code> to manage programs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Badge variant="outline">Active programs: 2</Badge>
                  <p className="text-sm text-muted-foreground">
                    Each program can have multiple updates. Add new updates to the "updates" array 
                    within each program object.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle>Events Management</CardTitle>
                <CardDescription>
                  Edit <code className="bg-muted px-1 rounded">public/data/events.json</code> to manage events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Badge variant="outline">Upcoming events: 1</Badge>
                  <p className="text-sm text-muted-foreground">
                    Events will automatically appear in the calendar. Use ISO date format 
                    (YYYY-MM-DD) for proper sorting.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery">
            <Card>
              <CardHeader>
                <CardTitle>Gallery Management</CardTitle>
                <CardDescription>
                  Edit <code className="bg-muted px-1 rounded">public/data/gallery.json</code> to manage gallery items
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Badge variant="outline">Gallery items: 2</Badge>
                  <p className="text-sm text-muted-foreground">
                    Upload images to <code className="bg-muted px-1 rounded">public/images/gallery/</code> 
                    and reference them in the JSON file.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};