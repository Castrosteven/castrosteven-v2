import { Badge } from "@/components/ui/badge";

interface Company {
  name: string;
  sector: string;
  description: string;
  type: string;
}

const companies: Company[] = [
  // Healthcare
  {
    name: "Mount Sinai",
    sector: "Healthcare",
    description: "Leading academic medical center and healthcare system",
    type: "Enterprise",
  },
  {
    name: "Weill Cornell",
    sector: "Healthcare",
    description: "Premier medical school and healthcare institution",
    type: "Enterprise",
  },
  // Finance
  {
    name: "Fox Corporation",
    sector: "Finance",
    description: "Financial services and investment management",
    type: "Enterprise",
  },
  {
    name: "RVO",
    sector: "Finance",
    description: "Financial technology and services company",
    type: "Enterprise",
  },
  // Tech
  {
    name: "Portobel",
    sector: "Tech",
    description: "Innovative startup in technology solutions",
    type: "Startup",
  },
  {
    name: "Freelance Projects",
    sector: "Tech",
    description: "Various technology consulting and development projects",
    type: "Freelance",
  },
  {
    name: "ConneXions",
    sector: "Tech",
    description: "Social app - Current working project",
    type: "Startup",
  },
];

const sectorColors = {
  Healthcare:
    "bg-blue-500/10 text-blue-700 border-blue-200 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-800",
  Finance:
    "bg-green-500/10 text-green-700 border-green-200 dark:bg-green-500/20 dark:text-green-300 dark:border-green-800",
  Tech: "bg-purple-500/10 text-purple-700 border-purple-200 dark:bg-purple-500/20 dark:text-purple-300 dark:border-purple-800",
};

const typeColors = {
  Enterprise:
    "bg-gray-500/10 text-gray-700 border-gray-200 dark:bg-gray-500/20 dark:text-gray-300 dark:border-gray-800",
  Startup:
    "bg-orange-500/10 text-orange-700 border-orange-200 dark:bg-orange-500/20 dark:text-orange-300 dark:border-orange-800",
  Freelance:
    "bg-indigo-500/10 text-indigo-700 border-indigo-200 dark:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-800",
};

export function CompaniesSection() {
  const sectors = ["Healthcare", "Finance", "Tech"];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Companies I&apos;ve Worked With
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience across healthcare, finance, and technology sectors
            </p>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {sectors.length}
              </div>
              <div className="text-muted-foreground">Sectors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {companies.length}
              </div>
              <div className="text-muted-foreground">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {companies.filter((c) => c.type === "Enterprise").length}
              </div>
              <div className="text-muted-foreground">Enterprise Clients</div>
            </div>
          </div>

          {/* Sector Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {sectors.map((sector) => (
              <Badge
                key={sector}
                variant="outline"
                className={`${
                  sectorColors[sector as keyof typeof sectorColors]
                } cursor-pointer hover:opacity-80 transition-opacity`}
              >
                {sector}
              </Badge>
            ))}
          </div>

          {/* Companies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <div
                key={company.name}
                className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
              >
                {/* Company Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {company.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {company.description}
                    </p>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className={
                      sectorColors[company.sector as keyof typeof sectorColors]
                    }
                  >
                    {company.sector}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={
                      typeColors[company.type as keyof typeof typeColors]
                    }
                  >
                    {company.type}
                  </Badge>
                  {company.name === "ConneXions" && (
                    <Badge
                      variant="default"
                      className="bg-green-500 text-white animate-pulse"
                    >
                      Current Project
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
