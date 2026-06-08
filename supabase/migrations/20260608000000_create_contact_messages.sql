-- Create the contact_messages table
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    phone text,
    email text NOT NULL,
    subject text NOT NULL,
    message text NOT NULL,
    status text DEFAULT 'pending'::text,
    ip_address text,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert messages
CREATE POLICY "Allow public insert to contact_messages" 
ON public.contact_messages 
FOR INSERT 
TO public
WITH CHECK (true);

-- Allow authenticated users to view messages
CREATE POLICY "Allow authenticated select on contact_messages" 
ON public.contact_messages 
FOR SELECT 
TO authenticated 
USING (true);
