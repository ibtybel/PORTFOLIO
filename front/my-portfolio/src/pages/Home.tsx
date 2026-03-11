import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Chip,
  Avatar,
  Stack,
} from '@mui/material';
import { Email, LocationOn, Phone } from '@mui/icons-material';
import { keyframes } from '@emotion/react';

// ✅ IMPORT YOUR IMAGE CORRECTLY
import profileImg from "../data/pic.png";

// Animated gradient using background-position shift
const gradientShift = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(135deg, #1b1b2f 0%, #2c2c54 50%, #1b1b2f 100%)',
        backgroundSize: '200% 200%',
        animation: `${gradientShift} 18s ease-in-out infinite`,
      }}
    >
      {/* ===== MAIN CONTENT ===== */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: { xs: 4, md: 8 },
          px: 2,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            color: 'white',
            borderRadius: 4,
            boxShadow: 6,
            backgroundColor: 'rgba(0,0,0,0.35)',
            backdropFilter: 'blur(6px)',
            p: { xs: 3, md: 5 },
          }}
        >
          {/* ===== Hero Section ===== */}
          <Box
            sx={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {/* ⭐ FIXED WORKING IMAGE ⭐ */}
            <Avatar
              src={profileImg}
              alt="profile"
              sx={{
                width: 170,
                height: 170,
                borderRadius: '50%',
                border: '5px solid #ffffff',
                boxShadow: '0px 5px 25px rgba(0,0,0,0.5)',
                mb: 1,
              }}
            />

            <Typography variant="h2" fontWeight="bold" gutterBottom>
              Ibtissam Bellous
            </Typography>
            <Typography variant="h5" sx={{ color: '#bbbbdd' }} gutterBottom>
              Front‑End Developer • Problem Solver
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: 800,
                mx: 'auto',
              }}
            >
              I bridge the gap between users and technology. From building elegant user
              interfaces to delivering precise technical support, I strive to make tech
              simple, functional, and impactful.
            </Typography>
          </Box>

          {/* ===== Contact Summary ===== */}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            useFlexGap
            flexWrap="wrap"
            sx={{ mt: 4 }}
          >
            <Chip icon={<LocationOn />} label="Ouajda, Morocco" color="secondary" />
            <Chip icon={<Email />} label="bellous.ibtissam@gmail.com" color="secondary" />
            <Chip icon={<Phone />} label="+212 708 992 165" color="secondary" />
          </Stack>

          {/* ===== About Section ===== */}
          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, md: 5 },
              mt: 5,
              borderRadius: 4,
              background: '#2c2c3c',
              color: 'white',
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              👋 About Me
            </Typography>
            <Typography variant="body1" lineHeight={1.8}>
              I am a proactive and adaptable front-end developer with experience in creating
              user-friendly interfaces and solving technical problems. I am skilled in React
              and Material-UI and have experience with Docker. I am comfortable working with
              both Windows and Linux systems and have a solid foundation in development and IT
              support. I am also experienced with incident management tools such as Jira and
              ServiceNow. Whether I'm designing sleek, intuitive interfaces or troubleshooting
              complex issues, I prioritise clarity, efficiency and creating delightful user
              experiences that truly resonate.
            </Typography>
          </Paper>

          {/* ===== Experience Section ===== */}
          <Box sx={{ width: '100%', mt: 6 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
              💼 Experience
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {[
                {
                  title:
                    'Front‑End Development of a Responsive Web Platform (React / Vue / Angular)',
                  year: 'Mar 2025 – Nov 2025',
                  desc:
                    'Build the user interface of a new web platform used by clients or internal teams.',
                },
                {
                  title:
                    'Creation of an Internal Dashboard (Front‑End + Data Visualization)',
                  year: 'Jun 2024 – Nov 2024',
                  desc:
                    'Build a modern dashboard to visualize internal KPIs (sales, support, tech performance, etc.).',
                },
                {
                  title: 'Front‑End Features for an AI‑Enhanced Web App',
                  year: 'jan 2026 – mar 2026',
                  desc:
                    'Integrate AI-powered UI features into a modern web application.',
                },
              ].map((exp, idx) => (
                <Grid item xs={12} md={4} key={idx}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      height: '100%',
                      backgroundColor: '#2c2c3c',
                      color: 'white',
                    }}
                  >
                    <Typography fontWeight="bold">{exp.title}</Typography>
                    <Typography variant="body2" sx={{ color: '#bbbbbb' }}>
                      {exp.year}
                    </Typography>
                    <Typography variant="body2" mt={1}>
                      {exp.desc}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}