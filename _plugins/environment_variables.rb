# Plugin to add environment variables to the `site` object in Liquid templates
 
module Jekyll
 
  class EnvironmentVariablesGenerator < Generator
 
    def generate(site)
      site.config['env'] = ENV['TARGET'] || 'dev'
      # Add other environment variables to `site.config` here...
      if site.config['env'] == 'prod'
        site.config['url'] = '//transit.land/'
        site.config['playground_url'] = '//transit.land/playground'
        site.config['api_host'] = '//transit.land'
      else
        site.config['url'] = '//dev.transit.land/'
        site.config['playground_url'] = '//dev.transit.land/playground'
        site.config['api_host'] = '//dev.transit.land'
      end
    end
 
  end
 
end
