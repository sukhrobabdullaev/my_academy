export async function GET(reqeust: Request) {
  return Response.json([
    {
      id: "1",
      name: "react",
      title: "React o'zi nima?",
      path: "videos/react/lesson1.mp4",
    },
    {
      id: "2",
      title: "Componentlar va ularning turlari",
      path: "videos/react/lesson2.mp4",
    },
    {
      id: "3",
      title: "exporting va importing?",
      path: "videos/react/lesson3.mp4",
    },
    {
      id: "4",
      title: "Component tuzilishi va JSX haqida",
      path: "videos/react/lesson4.mp4",
    },
  ]);
}
