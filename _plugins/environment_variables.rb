# Plugin to add environment variables to the `site` object in Liquid templates
 
module Jekyll
 
  class EnvironmentVariablesGenerator < Generator
 
    def generate(site)
      site.config['env'] = ENV['TARGET'] || 'dev'
      # Add other environment variables to `site.config` here...
      if site.config['env'] == 'prod'
        site.config['url'] = '//playground.transit.land/'
        site.config['api_host'] = '//datastore.transit.land'
      elsif site.config['env'] == 'staging'
        site.config['url'] = '//staging.playground.transit.land/'
        site.config['api_host'] = '//datastore.transit.land/'
      else
        site.config['url'] = '/'
        site.config['api_host'] = '//localhost:3000'
      end
    end
 
  end
 
end
