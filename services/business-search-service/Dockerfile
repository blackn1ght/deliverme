FROM mcr.microsoft.com/dotnet/core/aspnet:3.0 AS base
WORKDIR /src

FROM mcr.microsoft.com/dotnet/core/sdk:3.0 AS build-env
WORKDIR /src
COPY . .
RUN dotnet restore
RUN dotnet publish src/BusinessSearchService.Api/BusinessSearchService.Api.csproj -c Release -o /app

FROM base AS final
EXPOSE 80
WORKDIR /app
COPY --from=build-env /app .

ENTRYPOINT [ "dotnet", "BusinessSearchService.Api.dll" ]