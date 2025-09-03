"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Mail, Phone, Globe, MapPin, Building } from "lucide-react";
import Link from "next/link";
import type { User } from "@/lib/types";
import { motion } from "framer-motion";
import Globe3D from "./globe";

interface UserDetailsProps {
  user: User;
}

export default function UserDetails({ user }: UserDetailsProps) {
  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/">
            <Button
              variant="outline"
              className="bg-transparent border border-border hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Users
            </Button>
          </Link>
        </div>

        {/* User Header */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Building className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              {user.name}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg">
              @{user.username}
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 mt-8 lg:grid-cols-2 ">
          {/* LEFT COLUMN */}
          <div className="flex flex-col min-w-md md:w-full">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border border-border flex flex-col h-full ">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{user.email}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">{user.phone}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm text-muted-foreground">Website</p>
                    <a
                      href={`https://${user.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-primary hover:underline"
                    >
                      {user.website}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="border border-border flex flex-col h-full mt-4.5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Company Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <div>
                    <p className="text-sm text-muted-foreground">Company</p>
                    <p className="font-medium text-lg">{user.company.name}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Catch Phrase
                    </p>
                    <p className="italic">"{user.company.catchPhrase}"</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm text-muted-foreground">Business</p>
                    <p className="font-medium">{user.company.bs}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* RIGHT COLUMN (Address full height) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="h-full mt-4.5 lg:mt-0 min-w-md md:w-full"
          >
            <Card className="border border-border flex flex-col h-full ">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1">
                <div>
                  <p className="text-sm text-muted-foreground">Street</p>
                  <p className="font-medium">
                    {user.address.street}, {user.address.suite}
                  </p>
                </div>
                <Separator />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">City</p>
                    <p className="font-medium">{user.address.city}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Zipcode</p>
                    <p className="font-medium">{user.address.zipcode}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Globe3D
                    lat={parseFloat(user.address.geo.lat)}
                    lng={parseFloat(user.address.geo.lng)}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="border border-border">
            <a href={`mailto:${user.email}`}>
              <Mail className="h-4 w-4 mr-2" />
              Send Email
            </a>
          </Button>
          <Button variant="outline" asChild className="border border-border">
            <a href={`tel:${user.phone}`}>
              <Phone className="h-4 w-4 mr-2" />
              Call
            </a>
          </Button>
          <Button variant="outline" asChild className="border border-border">
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="h-4 w-4 mr-2" />
              Visit Website
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
