
const result = {

      "title": "Metaverse",
      "backgroundImage": "data:image/gif;base64,R0lGODdhBgAEAPIAAIygpnZ4ZsijT9u+lABeUHSOoJDE4uLazCwAAAAABgAEAAADDggBVXEiBjKqmGKYQkgCADs=",
      "backgroundColor": "#8f937c",
      "videos": [
         {
            "id": "macbook",
            "src": "videos/macbook.mp4",
            "loop": true,
            "autoplay": true,
            "width": 500,
            "height": 500
         },
         {
            "id": "point1",
            "src": "videos/point1.mp4",
            "loop": true,
            "autoplay": true,
            "width": 1920,
            "height": 1080
          },
          {
            "id": "point2",
            "src": "videos/point2.mp4",
            "loop": true,
            "autoplay": true,
            "width": 1900,
            "height": 1080
          },
          {
            "id": "point3",
            "src": "videos/point3.mp4",
            "loop": true,
            "autoplay": true,
            "width": 1900,
            "height": 1080
          }
      ],
      "start": "0_Campus_Point_1",
      "panorams": [
   
         {
            "id": "0_Campus_Point_1",
            "title": {"en": "0_Campus_Point_1"},
            "heading": 180,
            "markers": [
               {"lat": -4.10, "lon":   -1.10, "icon": "up", "action": {"type": "panorama", "id": "0_Campus_Point_2"}}
            ]
            // "videos": [
            //    {
            //       "position":{"x":20,"y":5,"z":1},
            //       "rotation":{"x":1,"y":5,"z":1},
            //       "scale":{"x":60,"y":60,"z":1},
            //       "videoId":"point1"
            //    }
            // ]
         },
         {
            "id": "0_Campus_Point_2",
            "title": {"en": "0_Campus_Point_2"},
            "heading": 180,
            "markers": [
               {"lat": -4.31, "lon":   -1.39, "icon": "up", "action": {"type": "panorama", "id": "0_Campus_Point_3"}},
               {"lat": -4.29, "lon": -179.44, "icon": "up", "action": {"type": "panorama", "id": "0_Campus_Point_1"}}
            ]
         },
         {
            "id": "0_Campus_Point_3",
            "title": {"en": "0_Campus_Point_3"},
            "heading": 180,
            "markers": [
               {"lat": -4.45, "lon":   -2.00, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S1_0000"}},
               {"lat": -0.44, "lon":  178.00, "icon": "up", "action": {"type": "panorama", "id": "0_Campus_Point_2"}}
            ]
         },
   
        
         {
            "id": "Cubemap_S1_0000",
            "title": {"en": "Cubemap_S1_0000"},
            "heading": 1.29,
            "markers": [
               {"lat": -10.00, "lon":  68.15, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0001"}},
               {"lat":  -7.03, "lon":  31.98, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0002"}},
               {"lat":  -9.61, "lon": -70.25, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0003"}},
               {"lat":  -7.03, "lon": -34.52, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0004"}},
   
               {"lat":   2.97, "lon":  110.53, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0001"}},
               {"lat":   0.53, "lon":   54.09, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0002"}},
               {"lat":  -0.53, "lon":   16.99, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0003"}},
               {"lat":  -0.18, "lon":  -19.10, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0004"}},
               {"lat":   0.68, "lon":  -56.07, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0005"}},
               {"lat":   2.97, "lon": -112.80, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0000"}}
            ]
         },
         {
            "id": "Cubemap_S1_0001",
            "title": {"en": "Cubemap_S1_0001"},
            "heading": 0.44,
            "markers": [
               {"lat": -10.00, "lon":  68.15, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0002"}},
               {"lat":  -7.03, "lon":  31.98, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0003"}},
               {"lat":  -9.61, "lon": -70.25, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0004"}},
               {"lat":  -7.03, "lon": -34.52, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0005"}},
   
               {"lat":   2.97, "lon":  110.53, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0002"}},
               {"lat":   0.53, "lon":   54.09, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0003"}},
               {"lat":  -0.53, "lon":   16.99, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0004"}},
               {"lat":  -0.18, "lon":  -19.10, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0005"}},
               {"lat":   0.68, "lon":  -56.07, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0000"}},
               {"lat":   2.97, "lon": -112.80, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0001"}}
            ]
         },
         {
            "id": "Cubemap_S1_0002",
            "title": {"en": "Cubemap_S1_0002"},
            "heading": 2.24,
            "markers": [
               {"lat": -10.00, "lon":  68.15, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0003"}},
               {"lat":  -7.03, "lon":  31.98, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0004"}},
               {"lat":  -9.61, "lon": -70.25, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0005"}},
               {"lat":  -7.03, "lon": -34.52, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0000"}},
   
               {"lat":   2.97, "lon":  110.53, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0003"}},
               {"lat":   0.53, "lon":   54.09, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0004"}},
               {"lat":  -0.53, "lon":   16.99, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0005"}},
               {"lat":  -0.18, "lon":  -19.10, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0000"}},
               {"lat":   0.68, "lon":  -56.07, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0001"}},
               {"lat":   2.97, "lon": -112.80, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0002"}}
            ]
         },
         {
            "id": "Cubemap_S1_0003",
            "title": {"en": "Cubemap_S1_0003"},
            "heading": 2.24,
            "markers": [
               {"lat": -10.00, "lon":  68.15, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0004"}},
               {"lat":  -7.03, "lon":  31.98, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0005"}},
               {"lat":  -9.61, "lon": -70.25, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0000"}},
               {"lat":  -7.03, "lon": -34.52, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0001"}},
   
               {"lat":   2.97, "lon":  110.53, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0004"}},
               {"lat":   0.53, "lon":   54.09, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0005"}},
               {"lat":  -0.53, "lon":   16.99, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0000"}},
               {"lat":  -0.18, "lon":  -19.10, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0001"}},
               {"lat":   0.68, "lon":  -56.07, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0002"}},
               {"lat":   2.97, "lon": -112.80, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0003"}}
            ]
         },
         {
            "id": "Cubemap_S1_0004",
            "title": {"en": "Cubemap_S1_0004"},
            "heading": 2.24,
            "markers": [
               {"lat": -10.00, "lon":  68.15, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0005"}},
               {"lat":  -7.03, "lon":  31.98, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0000"}},
               {"lat":  -9.61, "lon": -70.25, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0001"}},
               {"lat":  -7.03, "lon": -34.52, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0002"}},
   
               {"lat":   2.97, "lon":  110.53, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0005"}},
               {"lat":   0.53, "lon":   54.09, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0000"}},
               {"lat":  -0.53, "lon":   16.99, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0001"}},
               {"lat":  -0.18, "lon":  -19.10, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0002"}},
               {"lat":   0.68, "lon":  -56.07, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0003"}},
               {"lat":   2.97, "lon": -112.80, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0004"}}
            ]
         },
         {
            "id": "Cubemap_S1_0005",
            "title": {"en": "Cubemap_S1_0005"},
            "heading": 2.24,
            "markers": [
               {"lat": -10.00, "lon":  68.15, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0000"}},
               {"lat":  -7.03, "lon":  31.98, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0001"}},
               {"lat":  -9.61, "lon": -70.25, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0002"}},
               {"lat":  -7.03, "lon": -34.52, "icon": "point", "action": {"type": "panorama", "id": "Cubemap_S1_0003"}},
   
               {"lat":   2.97, "lon":  110.53, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0000"}},
               {"lat":   0.53, "lon":   54.09, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0001"}},
               {"lat":  -0.53, "lon":   16.99, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0002"}},
               {"lat":  -0.18, "lon":  -19.10, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0003"}},
               {"lat":   0.68, "lon":  -56.07, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0004"}},
               {"lat":   2.97, "lon": -112.80, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0005"}}
            ]
         },
   
   
         {
            "id": "Cubemap_S2_0000",
            "title": {"en": "Cubemap_S2_0000"},
            "heading": 1.29,
            "markers": [
               {"lat":  -9.30, "lon":   24.52, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S1_0000"}},
               {"lat":  -9.80, "lon":  -28.90, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S1_0005"}},
   
               {"lat":  -1.85, "lon": -181.00, "icon": "up", "action": {"type": "panorama", "id": "6_InterTown_Cam_1"}}
            ]
         },
         {
            "id": "Cubemap_S2_0001",
            "title": {"en": "Cubemap_S2_0001"},
            "heading": 0.44,
            "markers": [
               {"lat":  -9.30, "lon":   24.52, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S1_0001"}},
               {"lat":  -9.80, "lon":  -28.90, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S1_0000"}},
   
               {"lat":  -1.85, "lon": -181.00, "icon": "up", "action": {"type": "panorama", "id": "3_DesignTown_Cam_1"}}
            ]
         },
         {
            "id": "Cubemap_S2_0002",
            "title": {"en": "Cubemap_S2_0002"},
            "heading": 2.24,
            "markers": [
               {"lat":  -9.30, "lon":   24.52, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S1_0002"}},
               {"lat":  -9.80, "lon":  -28.90, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S1_0001"}},
   
               {"lat":  -1.85, "lon": -181.00, "icon": "up", "action": {"type": "panorama", "id": "4_FilmTown_Cam_1"}}
            ]
         },
         {
            "id": "Cubemap_S2_0003",
            "title": {"en": "Cubemap_S2_0003"},
            "heading": 2.24,
            "markers": [
               {"lat":  -9.30, "lon":   24.52, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S1_0003"}},
               {"lat":  -9.80, "lon":  -28.90, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S1_0002"}},
   
               {"lat":  -1.85, "lon": -181.00, "icon": "up", "action": {"type": "panorama", "id": "5_MediaTown_Cam_1"}}
            ]
         },
         {
            "id": "Cubemap_S2_0004",
            "title": {"en": "Cubemap_S2_0004"},
            "heading": 2.24,
            "markers": [
               {"lat":  -9.30, "lon":   24.52, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S1_0004"}},
               {"lat":  -9.80, "lon":  -28.90, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S1_0003"}},
   
               {"lat":  -1.85, "lon": -181.00, "icon": "up", "action": {"type": "panorama", "id": "7_TechTown_Cam_11"}}
            ]
         },
         {
            "id": "Cubemap_S2_0005",
            "title": {"en": "Cubemap_S2_0005"},
            "heading": 2.24,
            "markers": [
               {"lat":  -9.30, "lon":   24.52, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S1_0005"}},
               {"lat":  -9.80, "lon":  -28.90, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S1_0004"}},
   
               {"lat":  -1.85, "lon": -181.00, "icon": "up", "action": {"type": "panorama", "id": "2_BizTown_Cam_12"}}
            ]
         },
   
         
   
         {
            "id": "2_BizTown_Cam_1",
            "title": {"en": "2_BizTown_Cam_1"},
            "heading": 2.24,
            "markers": [
               {"lat": -5.96, "lon":  213.70, "icon": "up", "action": {"type": "panorama", "id": "2_BizTown_Cam_2"}},
   
               {"lat": -6.29, "lon":   80.65, "icon": "point", "action": {"type": "panorama", "id": "2_BizTown_Cam_3"}},
               {"lat": -7.07, "lon":  -11.54, "icon": "point", "action": {"type": "panorama", "id": "2_BizTown_Cam_10"}},
   
               {"lat": -3.67, "lon": -201.31, "icon": "up", "action": {"type": "panorama", "id": "2_BizTown_Cam_12"}},
   
               {"lat": -6.35, "lon": -320.37, "icon": "info", "action": {"type": "url", "href": "https://realbangkokmetaverse.com/D9JbmZB/biz-town"}}
            ]
         },
         {
            "id": "2_BizTown_Cam_2",
            "title": {"en": "2_BizTown_Cam_2"},
            "heading": 2.24,
            "markers": [
               {"lat": -9.10, "lon":   36.20, "icon": "up", "action": {"type": "panorama", "id": "2_BizTown_Cam_1"}}
            ]
         },
         {
            "id": "2_BizTown_Cam_3",
            "title": {"en": "2_BizTown_Cam_3"},
            "heading": 2.24,
            "markers": [
               {"lat": -5.48, "lon":  159.44, "icon": "up", "action": {"type": "panorama", "id": "2_BizTown_Cam_4"}},
               {"lat": -5.00, "lon":  117.26, "icon": "up", "action": {"type": "panorama", "id": "2_BizTown_Cam_5"}},
   
               {"lat": -5.38, "lon":    5.80, "icon": "point", "action": {"type": "panorama", "id": "2_BizTown_Cam_6"}},
               {"lat": -5.71, "lon":  278.86, "icon": "point", "action": {"type": "panorama", "id": "2_BizTown_Cam_1"}},
   
               {"lat": -4.72, "lon": -158.94, "icon": "up", "action": {"type": "panorama", "id": "2_BizTown_Cam_12"}},
   
               {"lat": -6.05, "lon":  -33.67, "icon": "info", "action": {"type": "url", "href": "https://realbangkokmetaverse.com/D9JbmZB/biz-town"}}
            
            ]
         },
         {
            "id": "2_BizTown_Cam_4",
            "title": {"en": "2_BizTown_Cam_4"},
            "heading": 2.24,
            "markers": [
               {"lat": -7.43, "lon": -315.34, "icon": "point", "action": {"type": "panorama", "id": "2_BizTown_Cam_5"}},
               {"lat": -5.56, "lon":  -15.80, "icon": "up", "action": {"type": "panorama", "id": "2_BizTown_Cam_3"}}
            ]
         },
         {
            "id": "2_BizTown_Cam_5",
            "title": {"en": "2_BizTown_Cam_5"},
            "heading": 2.24,
            "markers": [
               {"lat": -7.06, "lon":  228.02, "icon": "point", "action": {"type": "panorama", "id": "2_BizTown_Cam_4"}},
               {"lat": -5.42, "lon":  293.97, "icon": "up", "action": {"type": "panorama", "id": "2_BizTown_Cam_3"}}
            ]
         },
         {
            "id": "2_BizTown_Cam_6",
            "title": {"en": "2_BizTown_Cam_6"},
            "heading": 2.24,
            "markers": [
               {"lat": -8.87, "lon":   65.67, "icon": "up", "action": {"type": "panorama", "id": "2_BizTown_Cam_7"}},
               {"lat": -6.58, "lon":  293.89, "icon": "point", "action": {"type": "panorama", "id": "2_BizTown_Cam_8"}},
               {"lat": -6.25, "lon":  206.73, "icon": "point", "action": {"type": "panorama", "id": "2_BizTown_Cam_3"}},
   
               {"lat": -5.75, "lon": -110.73, "icon": "info", "action": {"type": "url", "href": "https://realbangkokmetaverse.com/D9JbmZB/biz-town"}}
            ]
         },
         {
            "id": "2_BizTown_Cam_7",
            "title": {"en": "2_BizTown_Cam_7"},
            "heading": 2.24,
            "markers": [
               {"lat": -8.70, "lon":  253.17, "icon": "up", "action": {"type": "panorama", "id": "2_BizTown_Cam_6"}}
            ]
         },
         {
            "id": "2_BizTown_Cam_8",
            "title": {"en": "2_BizTown_Cam_8"},
            "heading": 2.24,
            "markers": [
               {"lat": -6.74, "lon":  356.18, "icon": "up", "action": {"type": "panorama", "id": "2_BizTown_Cam_9"}},
   
               {"lat": -7.62, "lon":  228.01, "icon": "point", "action": {"type": "panorama", "id": "2_BizTown_Cam_10"}},
               {"lat": -5.87, "lon":  128.26, "icon": "point", "action": {"type": "panorama", "id": "2_BizTown_Cam_6"}},
   
               {"lat": -6.15, "lon": -181.83, "icon": "info", "action": {"type": "url", "href": "https://realbangkokmetaverse.com/D9JbmZB/biz-town"}}
            ]
         },
         {
            "id": "2_BizTown_Cam_9",
            "title": {"en": "2_BizTown_Cam_9"},
            "heading": 2.24,
            "markers": [
               {"lat": -9.13, "lon": -183.20, "icon": "up", "action": {"type": "panorama", "id": "2_BizTown_Cam_8"}}
            ]
         },
         {
            "id": "2_BizTown_Cam_10",
            "title": {"en": "2_BizTown_Cam_10"},
            "heading": 2.24,
            "markers": [
               {"lat": -6.74, "lon":  -67.56, "icon": "up", "action": {"type": "panorama", "id": "2_BizTown_Cam_11"}},
   
               {"lat": -6.80, "lon": -206.75, "icon": "point", "action": {"type": "panorama", "id": "2_BizTown_Cam_1"}},
               {"lat": -7.03, "lon": -299.87, "icon": "point", "action": {"type": "panorama", "id": "2_BizTown_Cam_8"}},
   
               {"lat": -6.15, "lon": -255.37, "icon": "info", "action": {"type": "url", "href": "https://realbangkokmetaverse.com/D9JbmZB/biz-town"}}
            
            ]
         },
         {
            "id": "2_BizTown_Cam_11",
            "title": {"en": "2_BizTown_Cam_11"},
            "heading": 2.24,
            "markers": [
               {"lat": -8.70, "lon":  109.70, "icon": "point", "action": {"type": "panorama", "id": "2_BizTown_Cam_10"}}
            ]
         },
         {
            "id": "2_BizTown_Cam_12",
            "title": {"en": "2_BizTown_Cam_12"},
            "heading": 2.24,
            "markers": [
               {"lat": -12.24, "lon":  179.84, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0005"}},
               {"lat":  -4.53, "lon":   13.57, "icon": "point", "action": {"type": "panorama", "id": "2_BizTown_Cam_3"}},
               {"lat":  -4.53, "lon":  -16.57, "icon": "point", "action": {"type": "panorama", "id": "2_BizTown_Cam_1"}}
   
            ]
         },
   
   
         {
            "id": "3_DesignTown_Cam_1",
            "title": {"en": "3_DesignTown_Cam_1"},
            "heading": 2.24,
            "markers": [
               {"lat":  -0.06, "lon":  -96.95, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0001"}},
   
               {"lat":  -7.82, "lon":   40.68, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_2"}},
               {"lat":  -3.81, "lon":   62.17, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_3"}},
               {"lat":  -2.38, "lon":   88.24, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_4"}},
               {"lat":  -4.53, "lon":  108.00, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_5"}},
               {"lat":  -8.68, "lon":  126.18, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_6"}}
            ]
         },
         {
            "id": "3_DesignTown_Cam_2",
            "title": {"en": "3_DesignTown_Cam_2"},
            "heading": 2.24,
            "markers": [
               {"lat":  -6.44, "lon":  231.01, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_1"}},
               {"lat":  -6.30, "lon":   87.47, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_3"}},
               {"lat":  -3.00, "lon":  109.53, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_4"}},
               {"lat":  -4.44, "lon":  138.17, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_5"}},
               {"lat":  -6.68, "lon":  175.70, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_6"}}
            ]
         },
         {
            "id": "3_DesignTown_Cam_3",
            "title": {"en": "3_DesignTown_Cam_3"},
            "heading": 2.24,
            "markers": [
               {"lat":  -3.67, "lon": -113.30, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_1"}},
               {"lat":  -6.82, "lon":  -91.96, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_2"}},
               {"lat":  -5.96, "lon": -251.93, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_4"}},
               {"lat":  -5.96, "lon": -182.16, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_5"}},
               {"lat":  -4.39, "lon": -145.50, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_6"}}
            ]
         },
         {
            "id": "3_DesignTown_Cam_4",
            "title": {"en": "3_DesignTown_Cam_4"},
            "heading": 2.24,
            "markers": [
               {"lat":  -1.83, "lon":  -93.68, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_1"}},
               {"lat":  -4.41, "lon":  -65.46, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_2"}},
               {"lat":  -7.42, "lon":  -35.81, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_3"}},
               {"lat":  -6.33, "lon": -141.59, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_5"}},
               {"lat":  -3.75, "lon": -116.10, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_6"}}
            ]
         },
         {
            "id": "3_DesignTown_Cam_5",
            "title": {"en": "3_DesignTown_Cam_5"},
            "heading": 2.24,
            "markers": [
               {"lat":  -2.82, "lon":  280.14, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_1"}},
               {"lat":  -4.25, "lon":  321.54, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_2"}},
               {"lat":  -5.54, "lon":  357.92, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_3"}},
               {"lat":  -4.54, "lon":   74.26, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_4"}},
               {"lat":  -6.83, "lon":  268.48, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_6"}}
            ]
         },
         {
            "id": "3_DesignTown_Cam_6",
            "title": {"en": "3_DesignTown_Cam_6"},
            "heading": 2.24,
            "markers": [
               {"lat":  -4.43, "lon":  -72.12, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_1"}},
               {"lat":  -5.54, "lon":  357.92, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_2"}},
               {"lat":  -3.76, "lon": -325.94, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_3"}},
               {"lat":  -2.44, "lon": -286.59, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_4"}},
               {"lat":  -6.62, "lon": -271.97, "icon": "point", "action": {"type": "panorama", "id": "3_DesignTown_Cam_5"}}
            ]
         },
   
   
         {
            "id": "4_FilmTown_Cam_1",
            "title": {"en": "4_FilmTown_Cam_1"},
            "heading": 2.24,
            "markers": [
               {"lat":   4.79, "lon":  -91.80, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0002"}},
            
               {"lat":  -4.00, "lon":    6.31, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_2"}},
               {"lat":  -3.56, "lon":   50.39, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_3"}},
               {"lat":  -2.90, "lon":   88.42, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_4"}},
               {"lat":  -2.53, "lon":  115.12, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_5"}},
               {"lat":  -3.56, "lon":  165.57, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_6"}}
            ]
         },
         {
            "id": "4_FilmTown_Cam_2",
            "title": {"en": "4_FilmTown_Cam_2"},
            "heading": 2.24,
            "markers": [
               {"lat":  -4.29, "lon": -153.49, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_1"}},
               {"lat":  -5.06, "lon": -267.87, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_3"}},
               {"lat":  -2.53, "lon": -244.57, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_4"}},
               {"lat":  -2.31, "lon": -214.79, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_5"}},
               {"lat":  -2.53, "lon": -182.36, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_6"}}
            ]
         },
         {
            "id": "4_FilmTown_Cam_3",
            "title": {"en": "4_FilmTown_Cam_3"},
            "heading": 2.24,
            "markers": [
               {"lat":  -3.00, "lon": -119.88, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_1"}},
               {"lat":  -5.65, "lon":  -83.50, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_2"}},
               {"lat":  -5.04, "lon": -227.63, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_4"}},
               {"lat":  -3.62, "lon": -194.11, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_5"}},
               {"lat":  -2.19, "lon": -159.82, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_6"}}
            ]
         },
         {
            "id": "4_FilmTown_Cam_4",
            "title": {"en": "4_FilmTown_Cam_4"},
            "heading": 2.24,
            "markers": [
               {"lat":  -2.61, "lon":  -92.35, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_1"}},
               {"lat":  -2.60, "lon":  -55.97, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_2"}},
               {"lat":  -6.67, "lon":  -21.46, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_3"}},
               {"lat":  -7.82, "lon": -167.74, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_5"}},
               {"lat":  -3.21, "lon": -133.12, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_6"}}
            ]
         },
         {
            "id": "4_FilmTown_Cam_5",
            "title": {"en": "4_FilmTown_Cam_5"},
            "heading": 2.24,
            "markers": [
               {"lat":  -3.80, "lon":  -67.11, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_1"}},
               {"lat":  -3.14, "lon":  -31.28, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_2"}},
               {"lat":  -3.91, "lon":    6.09, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_3"}},
               {"lat":  -5.56, "lon":   49.18, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_4"}},
               {"lat":  -6.62, "lon": -120.17, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_6"}}
            ]
         },
         {
            "id": "4_FilmTown_Cam_6",
            "title": {"en": "4_FilmTown_Cam_6"},
            "heading": 2.24,
            "markers": [
               {"lat":  -4.74, "lon":  326.32, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_1"}},
               {"lat":  -2.87, "lon":  356.77, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_2"}},
               {"lat":  -2.76, "lon":   29.52, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_3"}},
               {"lat":  -3.64, "lon":   60.95, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_4"}},
               {"lat":  -4.52, "lon":   85.35, "icon": "point", "action": {"type": "panorama", "id": "4_FilmTown_Cam_5"}}
            ]
         },
   
         {
            "id": "5_MediaTown_Cam_1",
            "title": {"en": "5_MediaTown_Cam_1"},
            "heading": 2.24,
            "markers": [
               {"lat":  -8.51, "lon":  219.11, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_2"}},
               {"lat":  -4.21, "lon":   82.81, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_12"}},
               
               {"lat":  -0.48, "lon":   33.04, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0003"}}
            ]
         },
         {
            "id": "5_MediaTown_Cam_2",
            "title": {"en": "5_MediaTown_Cam_2"},
            "heading": 2.24,
            "markers": [
               {"lat":  -8.52, "lon":   45.83, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_1"}},
               {"lat":  -9.63, "lon":  184.47, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_3"}}
            ]
         },
         {
            "id": "5_MediaTown_Cam_3",
            "title": {"en": "5_MediaTown_Cam_3"},
            "heading": 2.24,
            "markers": [
               {"lat":  -8.45, "lon": -201.67, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_4"}},
               {"lat":  -9.09, "lon": -340.32, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_3"}}
            ]
         },
         {
            "id": "5_MediaTown_Cam_4",
            "title": {"en": "5_MediaTown_Cam_4"},
            "heading": 2.24,
            "markers": [
               {"lat":  -9.93, "lon":  126.52, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_5"}},
               {"lat":  -9.35, "lon":  -11.92, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_3"}}
            ]
         },
         {
            "id": "5_MediaTown_Cam_5",
            "title": {"en": "5_MediaTown_Cam_5"},
            "heading": 2.24,
            "markers": [
               {"lat":  -8.86, "lon":   96.86, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_6"}},
               {"lat":  -8.97, "lon":  -43.36, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_4"}}
            ]
         },
         {
            "id": "5_MediaTown_Cam_6",
            "title": {"en": "5_MediaTown_Cam_6"},
            "heading": 2.24,
            "markers": [
               {"lat":  -8.74, "lon":   64.24, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_7"}},
               {"lat":  -9.04, "lon":  -72.29, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_5"}}
            ]
         },
         {
            "id": "5_MediaTown_Cam_7",
            "title": {"en": "5_MediaTown_Cam_7"},
            "heading": 2.24,
            "markers": [
               {"lat":  -8.84, "lon":   34.42, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_8"}},
               {"lat":  -8.44, "lon": -100.32, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_6"}}
            ]
         },
         {
            "id": "5_MediaTown_Cam_8",
            "title": {"en": "5_MediaTown_Cam_8"},
            "heading": 2.24,
            "markers": [
               {"lat":  -7.97, "lon":    3.02, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_9"}},
               {"lat":  -9.00, "lon": -131.32, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_7"}}
            ]
         },
         {
            "id": "5_MediaTown_Cam_9",
            "title": {"en": "5_MediaTown_Cam_9"},
            "heading": 2.24,
            "markers": [
               {"lat":  -8.44, "lon":  -25.92, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_10"}},
               {"lat":  -9.14, "lon": -160.02, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_8"}}
            ]
         },
         {
            "id": "5_MediaTown_Cam_10",
            "title": {"en": "5_MediaTown_Cam_10"},
            "heading": 2.24,
            "markers": [
               {"lat":  -9.35, "lon":  -24.22, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_11"}},
               {"lat":  -9.35, "lon": -162.02, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_9"}}
            ]
         },
         {
            "id": "5_MediaTown_Cam_11",
            "title": {"en": "5_MediaTown_Cam_11"},
            "heading": 2.24,
            "markers": [
               {"lat":  -8.84, "lon":  305.02, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_12"}},
               {"lat":  -9.44, "lon":  170.32, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_10"}}
            ]
         },
         {
            "id": "5_MediaTown_Cam_12",
            "title": {"en": "5_MediaTown_Cam_12"},
            "heading": 2.24,
            "markers": [
               {"lat":  -4.14, "lon":  271.32, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_1"}},
               {"lat":  -8.84, "lon":  139.62, "icon": "point", "action": {"type": "panorama", "id": "5_MediaTown_Cam_11"}},
               
               {"lat":  -0.04, "lon":  -36.92, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0003"}}
            ]
         },
   
         {
            "id": "6_InterTown_Cam_1",
            "title": {"en": "6_InterTown_Cam_1"},
            "heading": 2.24,
            "markers": [
               {"lat":  -6.64, "lon":  -89.72, "icon": "point", "action": {"type": "panorama", "id": "6_InterTown_Cam_2"}},
               {"lat": -49.34, "lon":   85.42, "icon": "point", "action": {"type": "panorama", "id": "6_InterTown_Cam_7"}},
               
               {"lat": -16.54, "lon":  181.22, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0000"}}
            ]
         },
         {
            "id": "6_InterTown_Cam_2",
            "title": {"en": "6_InterTown_Cam_2"},
            "heading": 2.24,
            "markers": [
               {"lat":  -6.54, "lon":  -87.42, "icon": "point", "action": {"type": "panorama", "id": "6_InterTown_Cam_3"}},
               {"lat": -49.34, "lon":   85.12, "icon": "point", "action": {"type": "panorama", "id": "6_InterTown_Cam_1"}}
            ]
         },
         {
            "id": "6_InterTown_Cam_3",
            "title": {"en": "6_InterTown_Cam_3"},
            "heading": 2.24,
            "markers": [
               {"lat":  -6.54, "lon":  -92.22, "icon": "point", "action": {"type": "panorama", "id": "6_InterTown_Cam_4"}},
               {"lat": -49.54, "lon":   84.32, "icon": "point", "action": {"type": "panorama", "id": "6_InterTown_Cam_2"}}
            ]
         },
         {
            "id": "6_InterTown_Cam_4",
            "title": {"en": "6_InterTown_Cam_4"},
            "heading": 2.24,
            "markers": [
               {"lat":  -6.54, "lon":  -91.12, "icon": "point", "action": {"type": "panorama", "id": "6_InterTown_Cam_5"}},
               {"lat": -49.14, "lon":   84.12, "icon": "point", "action": {"type": "panorama", "id": "6_InterTown_Cam_3"}}
            ]
         },
         {
            "id": "6_InterTown_Cam_5",
            "title": {"en": "6_InterTown_Cam_5"},
            "heading": 2.24,
            "markers": [
               {"lat":  -6.74, "lon":  -89.32, "icon": "point", "action": {"type": "panorama", "id": "6_InterTown_Cam_6"}},
               {"lat": -49.84, "lon":   83.72, "icon": "point", "action": {"type": "panorama", "id": "6_InterTown_Cam_4"}}
               
            ]
         },
         {
            "id": "6_InterTown_Cam_6",
            "title": {"en": "6_InterTown_Cam_6"},
            "heading": 2.24,
            "markers": [
               {"lat":  -6.64, "lon":  -90.72, "icon": "point", "action": {"type": "panorama", "id": "6_InterTown_Cam_7"}},
               {"lat": -49.74, "lon":   85.12, "icon": "point", "action": {"type": "panorama", "id": "6_InterTown_Cam_5"}}
            ]
         },
         {
            "id": "6_InterTown_Cam_7",
            "title": {"en": "6_InterTown_Cam_7"},
            "heading": 2.24,
            "markers": [
               {"lat":  -6.44, "lon":  -90.82, "icon": "point", "action": {"type": "panorama", "id": "6_InterTown_Cam_1"}},
               {"lat": -49.73, "lon":   83.99, "icon": "point", "action": {"type": "panorama", "id": "6_InterTown_Cam_6"}}
            ]
         },
   
   
         {
            "id": "7_TechTown_Cam_1",
            "title": {"en": "7_TechTown_Cam_1"},
            "heading": 2.24,
            "markers": [
               {"lat":  -9.94, "lon":  120.52, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_2"}},
               {"lat":  -5.53, "lon":  102.79, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_3"}},
               {"lat":  -3.33, "lon":   95.19, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_4"}},
   
               {"lat":  -3.43, "lon":   42.89, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_8"}},
               {"lat":  -5.03, "lon":   24.39, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_9"}},
               {"lat":  -7.33, "lon":   -2.49, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_10"}},
               {"lat": -10.63, "lon":  -30.79, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_11"}}
            
            ]
         },
         {
            "id": "7_TechTown_Cam_2",
            "title": {"en": "7_TechTown_Cam_2"},
            "heading": 2.24,
            "markers": [
               {"lat":  -9.04, "lon":   96.12, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_3"}},
               {"lat":  -4.14, "lon":   85.22, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_4"}},
               {"lat":  -2.74, "lon":   59.52, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_5"}},
               {"lat":  -7.97, "lon":  -84.36, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_1"}},
   
               {"lat":  -3.38, "lon":   -2.93, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_9"}},
               {"lat":  -3.48, "lon":  -26.33, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_10"}},
               {"lat":  -5.23, "lon":  -36.36, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_11"}}
            
            ]
         },
         {
            "id": "7_TechTown_Cam_3",
            "title": {"en": "7_TechTown_Cam_3"},
            "heading": 2.24,
            "markers": [
               {"lat":  -8.44, "lon":   76.62, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_4"}},
               {"lat":  -8.13, "lon":  -93.19, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_2"}},
               {"lat":  -2.93, "lon":  -82.19, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_1"}},
               {"lat":  -3.77, "lon":   43.80, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_5"}},
               {"lat":  -4.27, "lon":   24.60, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_7"}},
               {"lat":  -3.97, "lon":   -3.40, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_8"}},
               {"lat":  -2.67, "lon":  -59.20, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_11"}}
            ]
         },
         {
            "id": "7_TechTown_Cam_4",
            "title": {"en": "7_TechTown_Cam_4"},
            "heading": 2.24,
            "markers": [
               {"lat":  -9.03, "lon":  252.19, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_3"}},
               {"lat":  -2.93, "lon":  -82.19, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_1"}},
               {"lat":  -5.23, "lon":  256.59, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_2"}},
               {"lat":  -5.97, "lon":   19.30, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_5"}},
               {"lat":  -4.71, "lon":   -1.70, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_7"}},
               {"lat":  -3.61, "lon":  -26.50, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_8"}}
            ]
         },
         {
            "id": "7_TechTown_Cam_5",
            "title": {"en": "7_TechTown_Cam_5"},
            "heading": 2.24,
            "markers": [
               {"lat":  -9.44, "lon":  188.83, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_4"}},
               {"lat":  -5.43, "lon":  215.69, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_3"}},
               {"lat":  -3.67, "lon":  227.50, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_2"}},
               {"lat":  -2.07, "lon": -109.11, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_1"}},
               {"lat": -16.27, "lon":  334.80, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_7"}},
               {"lat":  -7.47, "lon":  309.80, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_8"}},
               {"lat":  -4.77, "lon":  299.30, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_9"}},
               {"lat":  -2.77, "lon":  -76.30, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_10"}}
            
            ]
         },
         {
            "id": "7_TechTown_Cam_6",
            "title": {"en": "7_TechTown_Cam_6"},
            "heading": 2.24,
            "markers": [
            ]
         },
         {
            "id": "7_TechTown_Cam_7",
            "title": {"en": "7_TechTown_Cam_7"},
            "heading": 2.24,
            "markers": [
               {"lat":  -8.64, "lon":  177.83, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_4"}},
               {"lat":  -5.63, "lon":  208.19, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_3"}},
               {"lat":  -3.73, "lon":  224.20, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_2"}},
               {"lat": -18.47, "lon":  135.10, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_5"}},
               {"lat":  -8.37, "lon":  305.70, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_8"}},
               {"lat":  -4.77, "lon":  294.70, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_9"}},
               {"lat":  -2.33, "lon":  277.90, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_10"}}
            ]
         },
         {
            "id": "7_TechTown_Cam_8",
            "title": {"en": "7_TechTown_Cam_8"},
            "heading": 2.24,
            "markers": [
               {"lat":  -8.14, "lon":  -84.33, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_9"}},
               {"lat":  -3.63, "lon":  -98.49, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_10"}},
               {"lat":  -3.33, "lon": -116.39, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_11"}},
   
               {"lat":  -7.16, "lon": -246.60, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_7"}},
               {"lat":  -5.56, "lon": -230.60, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_5"}},
               {"lat":  -4.56, "lon": -208.70, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_4"}},
               {"lat":  -3.97, "lon": -183.00, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_3"}}
            ]
         },
         {
            "id": "7_TechTown_Cam_9",
            "title": {"en": "7_TechTown_Cam_9"},
            "heading": 2.24,
            "markers": [
               {"lat":  -6.04, "lon": -120.63, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_10"}},
               {"lat":  -4.53, "lon": -141.29, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_11"}},
               {"lat":  -3.63, "lon": -155.59, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_1"}},
               {"lat":  -3.47, "lon": -182.20, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_2"}},
               {"lat":  -8.17, "lon": -265.80, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_8"}},
               {"lat":  -3.07, "lon": -251.00, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_7"}}
            ]
         },
   
         {
            "id": "7_TechTown_Cam_10",
            "title": {"en": "7_TechTown_Cam_10"},
            "heading": 2.24,
            "markers": [
               {"lat": -10.03, "lon":  209.79, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_11"}},
               {"lat":  -7.33, "lon": -181.99, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_1"}},
               {"lat":  -4.67, "lon": -206.10, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_2"}},
               {"lat":  -3.98, "lon": -225.20, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_3"}},
   
               {"lat":  -7.17, "lon": -308.80, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_9"}},
               {"lat":  -4.17, "lon": -286.40, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_8"}},
               {"lat":  -1.89, "lon": -272.70, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_7"}}
            ]
         },
         {
            "id": "7_TechTown_Cam_11",
            "title": {"en": "7_TechTown_Cam_11"},
            "heading": 2.24,
            "markers": [
               {"lat":  -7.83, "lon": -216.69, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_1"}},
               {"lat":  -4.97, "lon": -230.10, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_2"}},
               {"lat":  -3.47, "lon": -244.20, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_3"}},
               {"lat":  -1.87, "lon": -255.70, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_4"}},
   
               {"lat":  -1.64, "lon": -282.93, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_7"}},
               {"lat":  -2.74, "lon": -295.83, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_8"}},
               {"lat":  -4.54, "lon": -311.93, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_9"}},
               {"lat":  -9.64, "lon": -322.73, "icon": "point", "action": {"type": "panorama", "id": "7_TechTown_Cam_10"}},
               
               {"lat":  -0.89, "lon":  -91.67, "icon": "up", "action": {"type": "panorama", "id": "Cubemap_S2_0004"}}
          
            ]
         }
   
   
      ]
   
   }



export default function handler(req, res) {
   res.status(200).json(result)
}