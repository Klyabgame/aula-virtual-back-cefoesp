export interface SeedRole{
    rol:string,
    description:string
}


interface SeedDataRole{
    roles:SeedRole[]
}

export const initialDataRole:SeedDataRole={
    roles:[
        { rol: "Docente", description: "Encargado de impartir clases" },
        { rol: "Estudiante", description: "Participa en las actividades académicas" },
        { rol: "Tutor", description: "Brinda apoyo personalizado al estudiante" },
        { rol: "Coordinador Académico", description: "Supervisa el desarrollo del curso" },
        { rol: "Invitado", description: "Acceso limitado al contenido del aula" },
        { rol: "Administrador de Plataforma", description: "Gestiona el sistema virtual" },
        { rol: "Asistente de Docencia", description: "Apoya al docente en tareas académicas" },
        { rol: "Evaluador", description: "Revisa y califica trabajos" },
        { rol: "Diseñador Instruccional", description: "Crea y adapta contenidos educativos" },
        { rol: "Soporte Técnico", description: "Resuelve problemas tecnológicos del aula" }
      ]
}